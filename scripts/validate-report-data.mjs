#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const REPORT_PATH = new URL('../report-data.js', import.meta.url);

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

const source = await readFile(REPORT_PATH, 'utf8');
const report = vm.runInNewContext(`${source}\nREPORT;`, {}, { timeout: 1000 });

if (!report || typeof report !== 'object') fail('REPORT is missing or invalid.');
if (!Number.isFinite(report.record?.w) || !Number.isFinite(report.record?.l)) {
  fail('record must contain numeric wins and losses.');
}
if (!report.weekSummary || !Array.isArray(report.weekSummary.notes)) {
  fail('weekSummary is incomplete.');
}
if (!Array.isArray(report.roster) || !report.roster.length) fail('roster is missing.');
if (!Array.isArray(report.entries) || !report.entries.length) fail('authored entries are missing.');
if (!Array.isArray(report.nextGames) || report.nextGames.length !== 6) {
  fail(`expected six upcoming games, received ${report.nextGames?.length ?? 0}.`);
}

for (const game of report.nextGames) {
  if (!game.date || !game.time || !game.matchup || !game.venue) {
    fail(`upcoming game is incomplete: ${JSON.stringify(game)}`);
  }
}

console.log(`Report data is valid: ${report.record.w}-${report.record.l}, ${report.roster.length} roster players, ${report.nextGames.length} upcoming games, ${report.entries.length} authored entries.`);
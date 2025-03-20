import * as execa from 'execa';

/**
 * Create a function which can run lerna commands
 * @param {String} lernaPath - path to lerna binary
 * @returns {function(string, string[], Object.<string, string>): Promise<string>}
 */
function getLernaRunner(lernaPath: string) {
  return async (command: string, args: string[] = [], options = {}) => {
    const { stdout } = await execa(lernaPath, [command, ...args], options);
    return stdout;
  };
}

export async function getLernaModules(): Promise<Array<{ name: string; location: string }>> {
  const { stdout: lernaBinary } = await execa('yarn', ['bin', 'lerna'], { cwd: process.cwd() });
  const lerna = getLernaRunner(lernaBinary);
  return JSON.parse(await lerna('list', ['--loglevel', 'silent', '--json', '--all']));
}

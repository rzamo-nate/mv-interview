# Introduction

This is a basic Typescript project that can be used to run the robot simulation specified in the interview question.

## Installation and execution

To install the project, you need to have Node.js installed on your machine. I suggest using a version manager like `nvm` to install the most recent LTS version of Node.js. You might also install `pnpm` for package management.

To run the project, first install the dependencies:

`pnpm install`

Then you can run the project with:

`npx ts-node src/main.ts`

If you are using VSCode and want to edit stuff in here, you might also install the recommended extensions for the project.

## Testing

There are some jest tests for this project in the `test` folder. If you are using VSCode, I've set up a launch configuration for running/debugging the tests. Just open a test file, go to the 'Run and Debug' tab, and hit the play button.

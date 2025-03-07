# Maintainers Guide

This document describes tools, tasks and workflow that one needs to be familiar with in order to effectively maintain
this project. If you use this package within your own software as is but don't plan on modifying it, this guide is
**not** for you.

## Tools

All you need to work on this project is a recent version of [Deno](https://deno.land/)

## Tasks

### Building

* The majority of this library (`src/generated`) is generated code based off of `scripts/src/public-api-methods.ts`.
* Run `./scripts/generate` to regenerate the API methods code. Unit tests verifying every API method has a corresponding function created for it are also generated in this step.

Run the following from the root of the project:

```
./scripts/generate
```

For more information on the code generation, have a look at `scripts/README.md`.

### Testing

Test can be run directly with Deno:

    deno task test

You can also run a test coverage report with:

    deno task coverage

### Releasing

Releases for this library are automatically generated off of git tags. Before creating a new release, ensure that everything on the `main` branch since the last tag is in a releasable state! At a minimum, [run the tests](#testing).

To create a new release:

1. Create a new GitHub Release from the [Releases page](https://github.com/slackapi/deno-slack-api/releases) by clicking the "Draft a new release" button.
2. Input a new version manually into the "Choose a tag" input. You can start off by incrementing the version to reflect a patch. (i.e. 1.16.0 -> 1.16.1)
    - After you input the new version, click the "Create a new tag: x.x.x on publish" button. This won't create your tag immediately.
    - Auto-generate the release notes by clicking the "Auto-generate release notes" button. This will pull in changes that will be included in your release. 
    - Flip to the preview mode and review the pull request labels of the changes included in this release (i.e. `semver:minor` `semver:patch`, `semver:major`). Tip: Your release version should be based on the tag of the largest change, so if this release includes a `semver:minor`, the release version in your tag should be upgraded to reflect a minor. 
    - Ensure that this version adheres to [semantic versioning][semver]. See [Versioning](#versioning) for correct version format. Version tags should match the following pattern: `1.0.1` (no `v` preceding the number).
3. Set the "Target" input to the "main" branch.
4. Name the release title after the version tag.
5. Make any adjustments to generated release notes to make sure they are accessible and approachable and that an end-user with little context about this project could still understand.
6. Make sure "This is a pre-release" is _not_ checked.
7. Publish the release by clicking the "Publish release" button!
8. After a few minutes, the corresponding version will be available on https://deno.land/x/deno_slack_api.

## Workflow

### Versioning and Tags

This project is versioned using [Semantic Versioning][semver].

### Branches

> Describe any specific branching workflow. For example:
> `main` is where active development occurs.
> Long running branches named feature branches are occasionally created for collaboration on a feature that has a large scope (because everyone cannot push commits to another person's open Pull Request)

<!--
### Issue Management

Labels are used to run issues through an organized workflow. Here are the basic definitions:

*  `bug`: A confirmed bug report. A bug is considered confirmed when reproduction steps have been
   documented and the issue has been reproduced.
*  `enhancement`: A feature request for something this package might not already do.
*  `docs`: An issue that is purely about documentation work.
*  `tests`: An issue that is purely about testing work.
*  `needs feedback`: An issue that may have claimed to be a bug but was not reproducible, or was otherwise missing some information.
*  `discussion`: An issue that is purely meant to hold a discussion. Typically the maintainers are looking for feedback in this issues.
*  `question`: An issue that is like a support request because the user's usage was not correct.
*  `semver:major|minor|patch`: Metadata about how resolving this issue would affect the version number.
*  `security`: An issue that has special consideration for security reasons.
*  `good first contribution`: An issue that has a well-defined relatively-small scope, with clear expectations. It helps when the testing approach is also known.
*  `duplicate`: An issue that is functionally the same as another issue. Apply this only if you've linked the other issue by number.


**Triage** is the process of taking new issues that aren't yet "seen" and marking them with a basic
level of information with labels. An issue should have **one** of the following labels applied:
`bug`, `enhancement`, `question`, `needs feedback`, `docs`, `tests`, or `discussion`.

Issues are closed when a resolution has been reached. If for any reason a closed issue seems
relevant once again, reopening is great and better than creating a duplicate issue.
-->

## Everything else

When in doubt, find the other maintainers and ask.

[semver]: http://semver.org/

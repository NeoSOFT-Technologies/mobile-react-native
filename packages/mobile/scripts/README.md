## Scripts Setup

## Development Scripts

These are the scripts that you will run manually during development.

If you get on Mac while running below scripts `zsh: permission denied:` run following command,

```sh
 chmod +x scripts/*.sh
```

#### Run

Run the app on a device or an emulator.

```sh
scripts/run.sh [flavor] [--build-type]
```

- flavor: `dev, qa, prod`
- build-type: `debug, profile, release`. Defaults to `debug`. Example:

```sh
scripts/run.sh dev --debug
```

#### Build

```sh
scripts/build.sh [file-format] [flavor] [--build-type] [--additional-flag]
```

- file-format: `apk, appbundle, ios`.
- flavor: `dev, qa, prod`.
- build-type: `debug, profile, release`. Defaults to `debug`.
- additional-flag: Any addition flag to pass to the `flutter build` command. Defaults to no flag. Example:

```sh
scripts/build.sh ios prod --release --no-codesign
```


## Github Action Scripts

These scripts are used by github actions CI/CD.

#### Bump Build Number

Bumps the `versionCode/buildNumber` by 1 in `pubspec.yaml` file. For example, it will change `version: 1.2.5+12` to `version: 1.2.5+13`.

```sh
scripts/bump-build-number.sh
```

#### Set Current Version to ENV

Sets the current version from `pubspec.yaml` to the github actions environment variables.

```sh
scripts/gh-action-read-and-set-version-env.sh
```

#### Commit Version

Reads the version from `pubspec.yaml` and creates a commit with the message "Bump version to ( version)". Then push the change to the current branch.

```sh
scripts/commit-version.sh
```
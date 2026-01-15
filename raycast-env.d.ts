/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `wispr-flow` command */
  export type WisprFlow = ExtensionPreferences & {}
  /** Preferences accessible in the `start-recording` command */
  export type StartRecording = ExtensionPreferences & {}
  /** Preferences accessible in the `stop-recording` command */
  export type StopRecording = ExtensionPreferences & {}
  /** Preferences accessible in the `open-app` command */
  export type OpenApp = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `wispr-flow` command */
  export type WisprFlow = {}
  /** Arguments passed to the `start-recording` command */
  export type StartRecording = {}
  /** Arguments passed to the `stop-recording` command */
  export type StopRecording = {}
  /** Arguments passed to the `open-app` command */
  export type OpenApp = {}
}


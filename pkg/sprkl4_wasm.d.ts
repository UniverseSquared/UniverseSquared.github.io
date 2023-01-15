/* tslint:disable */
/* eslint-disable */
/**
* @returns {any}
*/
export function list_examples(): any;
/**
*/
export function run(): void;
/**
* @param {Uint8Array} bytes
*/
export function load_binary_file(bytes: Uint8Array): void;
/**
* @param {string} source
*/
export function assemble_into_memory(source: string): void;
/**
* @param {KeyboardEvent} event
*/
export function keyboard_event(event: KeyboardEvent): void;
/**
*/
export function exec_instruction(): void;
/**
*/
export function reset_cpu(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly list_examples: (a: number) => void;
  readonly run: () => void;
  readonly load_binary_file: (a: number) => void;
  readonly assemble_into_memory: (a: number, b: number) => void;
  readonly keyboard_event: (a: number) => void;
  readonly exec_instruction: () => void;
  readonly reset_cpu: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfe37387e221e3a6f: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

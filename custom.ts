
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=10 color=#0fbc11 icon="\uf233"
//% groups='["Create", "Modify"]'
namespace requests {
    /**
     * Initializes the Radio module. Nothing will work before this block is called.
     */
    //% blockId=radio_init
    //% block="Initialize Radio module"
    //% group="Create"
    export function radio_init(): void {
        sdwireless.sdw_init()
    }

    /**
     * Returns a new Request object.
     */
    //% blockId=request block="request url %url to radio address %radio_address"
    //export function request(radio_address: number, url: string): void {
        
    //}
}

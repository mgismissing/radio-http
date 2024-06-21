
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

class RequestResult {
    constructor(
        public response_code: number,
        public response_text: string,
    ) {}
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
    //% block="Initialize radio module"
    //% group="Create"
    export function radio_init(): void {
        sdwireless.sdw_init()
    }

    /**
     * Returns a new Request object.
     */
    //% block="request to server radio address $radio_address and url $request_url"
    //% blockId="create"
    //% blockSetVariable="requestResult"
    //% group="Create"
    //% weight=100
    //export function create(radio_address: number, request_url: string, ): RequestResult {
    //    sdwireless.sdw_mbit_send_value("0" + request_url, radio_address)
    //    const requestResult = new RequestResult(20, "ciao");
    //    return requestResult;
    //}
}

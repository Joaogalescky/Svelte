const Dont_Clean_Screen = false

export default class CalculatorModel {
    #value : string //# = privado
    #accumulator : number
    #cleanScreen : boolean
    #operation : string

    constructor(value : string = null, accumulator: number = null, operation: string = null, cleanScreen = false) {
        this.#value = value
        this.#accumulator = accumulator
        this.#cleanScreen = cleanScreen
        this.#operation = operation
    }

    get value() {
        return this.#value?.replace('.', ',') || '0' //? = optional chaining
    }

    digitNumber(newValue : string) {
        return new CalculatorModel(
            (this.#cleanScreen || !this.#value) ? newValue : this.#value + newValue,
            this.#accumulator,
            this.#operation,
            Dont_Clean_Screen,
        ) 
    }
}
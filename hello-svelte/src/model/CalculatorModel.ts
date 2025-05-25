const Dont_Clean_Screen = false
const Clean_Screen = true

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

    digitDot() {
        return new CalculatorModel(
            this.#value?.includes('.') ? this.#value : this.#value + '.',
            this.#accumulator,
            this.#operation,
            Dont_Clean_Screen,
        ) 
    }

    clear() {
        return new CalculatorModel() 
    }

    digitOperation(nextOperation: string) {
        return this.calculate(nextOperation)
    }

    calculate(nextOperation : string = null) {
        const accumulator = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)
        const value = !this.#operation ? this.#value : `${accumulator}`

        return new CalculatorModel(
            value,
            accumulator,
            nextOperation,
            nextOperation ? Clean_Screen : Dont_Clean_Screen
        )
    }
}
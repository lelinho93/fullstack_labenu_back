import { v4 } from 'uuid'

export function generate(): string {
    return v4()
}
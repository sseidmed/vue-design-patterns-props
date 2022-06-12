import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ChildComponent, { validateMessage } from "@/components/ChildComponent.vue";

describe('ChildComponent', () => {
    test('renders message correctly when passed', () => {
        const wrapper = mount(ChildComponent, {
            props: {
                message: 'Clean your room'
            }
        });

        expect(wrapper.vm.message).toBe('Clean your room');
    });

    test('validates valid message prop', () => {
        ['I am the default message', 'Clean your room', 'Take out the trash', 'Find the remote'].forEach(message => {
            expect(() => validateMessage(message)).not.toThrow()
        })
    })

    test('throws error for invalid message prop', () => {
        expect(() => validateMessage('some invalid message prop').toThrow())
    })
})
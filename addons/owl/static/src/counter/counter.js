// Odoo.sh course - first development change
import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl.Counter";

    setup() {
        this.ddd = useState({ value: 1 });
    }

    increment() {
        this.ddd.value++;
    }
}

// Register the component as a client action to be used in XML menus
registry.category("actions").add("owl.todo_list_action", Counter);
import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

import { test, expect } from "vitest";

test("mount component", () => {
  expect(Home).toBeTruthy();

  const wrapper = mount(Home, {});
  expect(wrapper.text()).toContain("Basic Scaffold");
});

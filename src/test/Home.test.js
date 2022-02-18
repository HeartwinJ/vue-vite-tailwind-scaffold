import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

import { test, expect } from "vitest";

test("Mount Home component", () => {
  expect(Home).toBeTruthy();

  const wrapper = mount(Home);
  expect(wrapper.text()).toContain("Basic Scaffold");
});

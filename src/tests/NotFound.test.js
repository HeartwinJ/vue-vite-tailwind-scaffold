import { mount } from "@vue/test-utils";
import NotFound from "../views/NotFound.vue";

import { test, expect } from "vitest";

test("Mount NotFound component", () => {
  expect(NotFound).toBeTruthy();

  const wrapper = mount(NotFound);
  expect(wrapper.text()).toContain("Not Found");
});

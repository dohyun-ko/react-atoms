import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Button from "./Button";

export default {
  title: "buttons/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
};

export const Contained = Template.bind({});
Contained.args = {
  children: "Button",
};

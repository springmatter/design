# Icons

For our icons we use the open source Feather Icons set.

Our icons are a Vue component with the name SmIcon.

They take two props: 

- `name` which is required and should correspond to the exact name of an icon from the Feather icons set
- `size` which is not required and should be one of "small" "medium" or "large". If size is not included it defaults to "medium". Most of the time this prop is not necessary.

Icons can be targeted via the `.SmIcon` class in local scoped CSS, but feel free to add your own classes too.

### Installation

First: make sure you don't have the "components" folder in the "src" folder.
Second: just clone the repository to the path: src/components

`git clone git@github.com:EntaltsevSN/esn-styled-components-library.git src/components`

### Structure

This library includes several components using "styled-components" for React apps.

##### common

This folder has the components without any nesting to the component groups, like "form".

- Container (simple centered container with fluid width)
- Button (simple gray button with "bordered" and "filled" types. No colors supports yet)

##### flex

Formally, it's a grid elements. But these components are using "flexbox" as a basic form of alignment of elements.

- Row (simple row which has the wrapped alignment of childnren elements)
- Column (very simple element of "Row" element. Supports sizes: xs(481 - 767px), sm(768 - 991px), md(992 - 1200px), lg(1201px - ...))

##### form

Basic files for forms.

- Form (simple parent element)
- Input (text element for forms. Recommended types: text, email, tel, password)
- Label (simple label element for forms)

##### format

It's a library of some of the formatted elements for the apps.

- Alert (simple bordered block with alert message. Using for showing the topbar elements of errors and other alerts)
- Message (simple bordered message block. Using for showing messages in form validates or notes)
- Quote (simple quote block with the messages on the app)

### Logs

0.0.1 v contains 11 styled components

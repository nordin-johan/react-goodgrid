# React Goodgrid

A simple 12-colum gridsystem for React.

## Compability

All modern browsers which supports the CSS flex property.

## Usage

### Install the package
`` git clone https://github.com/nordin-johan/react-goodgrid.git ``

### Import the gridsystem components
`` import { Container, Row, Col } from 'react-goodgrid/Grid' ``

### Import stylesheet for gridsystem
`` import 'react-goodgrid/styles.css' ``

## Container

The Container is the main wrapper for the gridsystem.

### Usage
`` <Container></Container> ``

### Props
* fluid (boolean) - if true, the container will fill the full width of the viewport.
* className (string) - standard React className prop.

## Row

A Row is a wrapper for one or multiple columns(cols).

### Usage
`` <Row></Row> ``

### Props
* align (string) - start | center | end - vertical alignment of columns inside the row.
* justify (string) - start | center | end - horizontal alignment of columns inside the row.
* gutter (number) - 0 | 10 | 20 | 30 - controls distance between columns inside the row.
* className (string) - standard React className prop.

## Col

### Usage

`` <Col></Col> ``

A col is a column inside the gridsystem.

### Props
* xs (number) - Mobile portrait
* sm (number) - Mobile landscape
* md (number) - Tablet
* lg (number) - Laptop
* xl (number) - Laptop large
* className (string) - standard React className prop.
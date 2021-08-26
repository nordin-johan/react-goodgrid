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
* fluid - if true, the container will fill the full width of the viewport.
* className - standard React className prop.

## Row

A Row is a wrapper for one or multiple columns(cols).

### Usage
`` <Row></Row> ``

### Props
* align - start | center | end - vertical alignment of columns inside the row.
* justify - start | center | end - horizontal alignment of columns inside the row.
* gutter - 0 | 10 | 20 | 30 - controls distance between columns inside the row.
* className - standard React className prop.

## Col

### Usage

`` <Col xs={12} sm={12} md={12} lg={12} xl={6}></Col> ``

A col is a column inside the gridsystem.

### Props
* xs - Mobile portrait
* sm - Mobile landscape
* md - Tablet
* lg - Laptop
* xl - Laptop large
* className - standard React className prop.
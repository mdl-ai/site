# MDL.AI Site

## Purpose
This is a frontend to interact with my inference models, as I learn how to use new models this site is for putting them into production.

## Details
It is a 100% static website built with SvelteKit which is frontend library currently in beta, this in turn uses Vite which uses Rollup. This toolkit offers the best possible end user experience, scoring 100% on Google's lighthouse tool, while also being extremely productive for development, as the hot reload updates in milliseconds.

It is being hosted on AWS Amplify for convienience, but can be hosted on any provider as it simply calls the AWS API Gateway which can be called from anywhere.

## Formatting
I use auto formatting on all of my code for higher productivity, yapf for Python, clangd for C++ and prettier for html/js/css. While I use a line width of 100 for Python and C++, for html I prefer 500 to keep each element on a single line.
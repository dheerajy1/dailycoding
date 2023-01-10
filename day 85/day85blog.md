Today #Day85 of #100DaysOfCode, I wanted to extract all link tags from the Hashnode blog.

# Problem statement:

One day I thought of extracting all link tags from the XML file.

I did try directly passing the URL but I am getting a CORS error so I went with the traditional way of loading the data into my project folder.

## JavaScript

I used the Axios library and get the method,

```javascript
axios.get('data.xml')
  .then(response => {
    console.log(links);
  })
  .catch(error => {
    console.error(error);
  });
```

I then used The `DOMParser` the interface provides the ability to parse XML or HTML source code from a string into a DOM `Document`.

# DOMParser()

The `DOMParser()` the constructor creates a new `DOMParser` object. This object can be used to parse the text of a document using the `parseFromString()` method.

Syntax: `parseFromString(string, mimeType)`

### Parameters

`string`

The string to be parsed. It must contain either an HTML, XML, xhtml+xml or SVG document.

`mimeType`

A string. This string determines whether the XML parser or the HTML parser is used to parse the string. Valid values are:

* `text/html`
    
* `text/xml`
    

# Now,

using get and passing the local XML file location,

and resolving the promise and sending the data to a function

```javascript
axios.get('data.xml')
  .then(response => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, 'text/xml');
    extractLinks(xmlDoc);
  })
  .catch(error => {
    console.error(error);
  });
```

After that, define the function,

use the array from method and convert the all links selected to get each link text Using map method will return the link with its text content,

```javascript
function extractLinks(data) {
  const links = Array.from(data.querySelectorAll('link')).map(link =>  link.textContent);
    console.log(links);
}
```

# Conclusion

Started as a small idea but I successfully extracted data from an XML file using Axios library and DOM parser method.

# Code

1. code
    
    ![Alt text](1.%20day85%20code.png)
    
    preview
    
    ![Alt text](2.%20day85%20preview.png)
    

# Source: DomParser [\[Link\]](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
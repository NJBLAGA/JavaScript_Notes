//innerHTML property sets and returns the content of an element with new HTML content.
// - It is NOT recommended to use innerHTML when inserting plain text.


//innerText property returns the content of all elements, except for <script> and <style> elements.
// -Drawback -> Reflow is when the browser recalculates page elements for re-rendering the document.


//textContent property returns the raw content with styling inside of all elements, but excludes the HTML element tags. 
// TextContent has better performance because its value is not parsed as HTML. For that reason, using textContent can also prevent Cross-Site Scripting (XSS) attacks. 
// It isn't aware of CSS styling and will not trigger a reflow. 

//NOTE -> All Node objects have textContent, whereas only HTMLElement objects have innerText.
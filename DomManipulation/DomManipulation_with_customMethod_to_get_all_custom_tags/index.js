function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
document.getElementById('firstButtonHandler').addEventListener('click',()=>
{
   let t = Array.from(getAllElementsWithAttribute('data-foo'));
   t.forEach(element => {
       element.innerHTML="bhat";
   });

})
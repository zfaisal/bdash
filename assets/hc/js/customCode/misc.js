
var ResizeElementGroup = function(element)
{
  var elements = $('.'+ element)

  //console.log('cards',cards)
  var heights = []
  $.each(elements, function(item) {
    heights.push($(elements[item])[0].clientHeight)
  })

  console.log('heights',heights)

  var maxHeight =  Math.max.apply(null, heights)

  elements.css({
    height: maxHeight
  })
}




ResizeElementGroup('card-stats')
ResizeElementGroup('card-chart-box')
ResizeElementGroup('card-chart-box  .card')

let product_to_be_displayed = 0;


document.addEventListener("DOMContentLoaded", () => {
    let appleMarker = document.getElementById('apple');
    appleMarker.addEventListener("markerFound", (event) => {
        console.log("apple found!");
        product_to_be_displayed = 0;
        //display_product();
    });
    appleMarker.addEventListener("markerLost", (event) => {
        console.log("apple lost!");
    });
    let orangeMarker = document.getElementById('orange');
    orangeMarker.addEventListener("markerFound", (event) => {
        console.log("orange found!");
        product_to_be_displayed = 1;
        //display_product();
    });
    orangeMarker.addEventListener("markerLost", (event) => {
        console.log("orange lost!");
    });
});

function display_product()
{
  let product = document.getElementById('product1');
  console.log(product);
  let product_info = products[product_to_be_displayed];

  let title = Utils.findChildById(product, "title", true);
  title.innerHTML = product_info.name;
  Utils.findChildById(product, "product_image", true).src = product_info.img_src;
  Utils.findChildById(product, "price-value", true).innerHTML = product_info.price;
  Utils.findChildById(product, "description-value", true).innerHTML = product_info.description;
  
  let reviews = Utils.findChildById(product, "all_reviews", true);

  reviews.innerHTML = '';
  product_info.reviews.forEach(element => {
    new_review = reviews.createElement("div");
    new_review.innerHTML = element;
    reviews.appendChild(new_review);
  });
  console.log(product);
}






var _Utils = function ()
{
    this.findChildById = function (element, childID, isSearchInnerDescendant) // isSearchInnerDescendant <= true for search in inner childern 
    {
        var retElement = null;
        var lstChildren = isSearchInnerDescendant ? Utils.getAllDescendant(element) : element.childNodes;

        for (var i = 0; i < lstChildren.length; i++)
        {
            if (lstChildren[i].id == childID)
            {
                retElement = lstChildren[i];
                break;
            }
        }

        return retElement;
    }

    this.getAllDescendant = function (element, lstChildrenNodes)
    {
        lstChildrenNodes = lstChildrenNodes ? lstChildrenNodes : [];

        var lstChildren = element.childNodes;

        for (var i = 0; i < lstChildren.length; i++) 
        {
            if (lstChildren[i].nodeType == 1) // 1 is 'ELEMENT_NODE'
            {
                lstChildrenNodes.push(lstChildren[i]);
                lstChildrenNodes = Utils.getAllDescendant(lstChildren[i], lstChildrenNodes);
            }
        }

        return lstChildrenNodes;
    }        
}
var Utils = new _Utils;
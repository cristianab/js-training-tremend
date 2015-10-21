function renderItems(items, parentElement) {
  for (var i = 0; i < items.length; i++) {
      renderItem(items[i], parentElement);
  }
}

function renderFileTypes(fileTypes, parentElement) {
  var fileTypesContainer = document.createElement("ul");
  var fileTypesHeader = createElement("lh", null, {}, {textContent: "File types"});
  fileTypesContainer.appendChild(fileTypesHeader);

  for (var i = 0; i < fileTypes.length; i++) {
      var ftContainer = document.createElement('li');
      renderFileType(fileTypes[i], ftContainer);
      fileTypesContainer.appendChild(ftContainer);
  }

  parentElement.appendChild(fileTypesContainer);
}

function renderDistributions(distributions, parentElement) {
  var distributionsContainer = document.createElement("ul");
  var distributionsHeader = createElement("lh", null, {}, {textContent: "Distributions"});
  distributionsContainer.appendChild(distributionsHeader);

  for (var i = 0; i < distributions.length; i++) {
      var dContainer = document.createElement("li");
      renderDistribution(distributions[i], dContainer);
      distributionsContainer.appendChild(dContainer);
  }

  parentElement.appendChild(distributionsContainer);
  return distributionsContainer;
}

function renderCollections(collections, parentElement, button) {
  var button = button || false;
  var collContainer = document.createElement("ul");
  var collHeader = createElement("lh", null, {}, {textContent: "Collections"});
  collContainer.appendChild(collHeader);

  for (var i = 0; i < collections.length; i++) {
    renderCollection(collections[i], collContainer);
  }

  if (button) {
    var buttonElement = createElement("button", "li", {}, {textContent: "Add to another collection"});
    collContainer.appendChild(buttonElement);
  }

  parentElement.appendChild(collContainer);
}

function renderTags(tags, parentElement, button) {
  var button = button || false;
  var tagsContainer = document.createElement("ul");
  var tagsHeader = createElement("lh", null, {}, {textContent: "Tags"});
  tagsContainer.appendChild(tagsHeader);

  for (var i = 0; i < tags.length; i++) {
    renderTag(tags[i], tagsContainer);
  }

  if (button) {
    var buttonElement = createElement("button", "li", {}, {textContent: "Add another tag"}, {
      "click" : function() {
        var event_container = createElement("div", null, {}, {},{});
        var tag_input = createElement("input", null, {
          "type" : "text "
        }, {}, {});
        var save_tag = createElement("button", null, {}, {
          textContent: "Introduce nume tag"
        }, {
          "click" : function() {
            var input_value = tag_input.value;
            if ((input_value) && (tagExists(input_value) == false)) {
              var new_tag = createElement("li", null, {}, {textContent: input_value}, {});
              tag_input.parentNode.removeChild(tag_input);
              save_tag.parentNode.removeChild(save_tag);
              event_container.appendChild(new_tag);
              event_container.appendChild(buttonElement);
            } else {
              tag_input.style.border = '1px solid #f00';
            }
          }
        });
        buttonElement.parentNode.removeChild(buttonElement);
        tagsContainer.appendChild(event_container);
        event_container.appendChild(tag_input);
        event_container.appendChild(save_tag);
      }
    });
    tagsContainer.appendChild(buttonElement);
  }

  parentElement.appendChild(tagsContainer);
}

function tagExists(name) {
  var found = false;
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].name.toUpperCase() == name.toUpperCase()) {
      found = true;
    }
  }
  return found;
} 

function tagExists2(name) {
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].name == name) {
      return true;
    }
  }
  return false;
} 
// function renderSelectAllCheckbox(parentElement, selector) {
//   selector = selector || ".checkbox_item";

//   var mainCheckbox = createElement("input", null, {
//       "type": "checkbox"
//   }, {}, {
//       'change': function() {
//           var checkboxes = document.querySelectorAll(selector);
//           for (var i = 0; i < checkboxes.length; i++) {
//               // add check for checkbox
//               checkboxes[i].checked = mainCheckbox.checked;
//           }
//       }
//   });

//   parentElement.appendChild(mainCheckbox);
// }

function renderParts(parts, parentElement) {
    var partsContainer = document.createElement("ul");
    var partsHeader = createElement("lh", null, {}, {textContent: "Parts"});
    partsContainer.appendChild(partsHeader);

    for (var i = 0; i < parts.length; i++) {
      renderPart(parts[i], partsContainer);
    }

    parentElement.appendChild(partsContainer);
}

function renderSelectAllCheckbox(parentElement, selector) {
  selector = selector || ".checkbox_item";

  var mainCheckbox = createElement("input", null, {
      "type": "checkbox"
  }, {}, {
      'change': function() {
          var checkboxes = document.querySelectorAll(selector);
          for (var i = 0; i < checkboxes.length; i++) {
              // add check for checkbox
              checkboxes[i].checked = mainCheckbox.checked;
          }
      }
  });

  parentElement.appendChild(mainCheckbox);
}

function renderItem(item, parentElement) {
  var itemContainer = document.createElement("li");
  var itemDataContainer = document.createElement("ul");

  var nameElement = createElement("lh", null, {}, {textContent: item.name});
  itemDataContainer.appendChild(nameElement);

  var descriptionElement = createElement("li", null, {}, {textContent: item.details.description});
  itemDataContainer.appendChild(descriptionElement);

  var fileTypesContainer = document.createElement("li");
  renderFileTypes(item.filesTypes, fileTypesContainer);
  itemDataContainer.appendChild(fileTypesContainer);

  var collectionsContainer = document.createElement("li");
  renderCollections(item.collections, collectionsContainer, true);
  itemDataContainer.appendChild(collectionsContainer);

  var tagsContainer = document.createElement("li");
  renderTags(item.tags, tagsContainer, true);
  itemDataContainer.appendChild(tagsContainer);

  var partsContainer = document.createElement("li");
  renderParts(item.parts, partsContainer);
  itemDataContainer.appendChild(partsContainer);

  var checkbox = createElement("input", "li", {"type": "checkbox", "class": "checkbox_item"});
  itemDataContainer.appendChild(checkbox);

  itemContainer.appendChild(itemDataContainer);
  parentElement.appendChild(itemContainer);
}

function renderFileType(fileType, parentElement) {
  var fileTypeContainer = document.createElement("ul");

  var fileTypeFileName = createElement("lh", null, {}, {"textContent": fileType.filename});
  fileTypeContainer.appendChild(fileTypeFileName);

  var fileTypeExtension = createElement("li", null, {}, {"textContent": fileType.extension});
  fileTypeContainer.appendChild(fileTypeExtension);

  var fileTypeDistributionContainer = document.createElement("li");
  renderDistributions(fileType.distributions, fileTypeDistributionContainer);
  fileTypeContainer.appendChild(fileTypeDistributionContainer);

  parentElement.appendChild(fileTypeContainer);
}

function renderDistribution(distribution, parentElement) {
  var distributionList = document.createElement("ul");

  var distributionName = createElement("lh", null, {}, {"textContent": distribution.name});
  var distributionPrice = createElement("li", null, {}, {"textContent": distribution.price});

  distributionList.appendChild(distributionName);
  distributionList.appendChild(distributionPrice);
  parentElement.appendChild(distributionList);
}

function renderCollection(id, parentElement) {
  var collection = getCollection(id);
  var collectionElement = createElement("li", null, {'data-col-id': collection.id}, {textContent: collection.name});

  parentElement.appendChild(collectionElement);
}

function renderTag(id, parentElement) {
  var tag = getTag(id);
  var tagElement = createElement("li", null, {'data-tag-id': tag.id}, {textContent: tag.name});

  parentElement.appendChild(tagElement);
}

function renderPart(id, parentElement) {
  var part = getPart(id);
  var partElement = createElement("li", null, {'data-part-id': part.id}, {textContent: part.name});

  parentElement.appendChild(partElement)
}

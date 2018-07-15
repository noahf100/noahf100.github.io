{
    "nodes": [
	      {
		  "data": {"id": "noah", "label": "Noah", "type": "c", "link": ""}
	      },
	      {
		  "data": {"id": "fe", "label": "Frontend", "type": "f", "link": ""}
	      },
	      {
		  "data": {"id": "be", "label": "Backend", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "java", "label": "Java", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "python", "label": "Python", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "scala", "label": "Scala", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "tensorflow", "label": "Tensorflow", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "angular", "label": "Angular", "type": "f", "link": ""}
	      },
	      {
		  "data": {"id": "html", "label": "HTML", "type": "f", "link": ""}
	      },
	      {
		  "data": {"id": "css", "label": "CSS", "type": "f", "link": ""}
	      },
	      {
		  "data": {"id": "javascript", "label": "Javascript", "type": "f", "link": ""}
	      },
	      {
		  "data": {"id": "c", "label": "C", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "ocaml", "label": "OCaml", "type": "b", "link": ""}
	      },
	      {
		  "data": {"id": "deeplearning", "label": "Deep Learning", "type": "b", "link": "https://github.com/noahf100/DeepLearning"}
	      },
	      {
		  "data": {"id": "deeplearningname", "label": "Named Entity Recognition", "type": "b", "link": "https://github.com/noahf100/NamedEntityRecognition"}
	      },
	      {
		  "data": {"id": "deeplearningfood", "label": "Ingredient Name Extractor", "type": "b", "link": "https://github.com/noahf100/IngredientNameExtractor"}
	      },
	      {
		  "data": {"id": "portal", "label": "Portal Augmented Reality", "type": "f", "link": "https://github.com/noahf100/PortalAR"}
	      },
	      {
		  "data": {"id": "website", "label": "noahfang.me", "type": "f", "link": "https://noahfang.me"}
	      }
	      ],
	"edges": [
		  {
		      "data": {
			  "id": "noahfe",
			      "source": "noah",
			      "target": "fe"
			      }
		  },
		  {
		      "data": {
			  "id": "noahbe",
			      "source": "noah",
			      "target": "be"
			      }
		  },
		  {
		      "data": {
			  "id": "bej",
			      "source": "be",
			      "target": "java"
			      }
		  },
		  {
		      "data": {
			  "id": "ac",
			      "source": "be",
			      "target": "python"
			      }
		  },
		  {
		      "data": {
			  "id": "betensorflow",
			      "source": "be",
			      "target": "tensorflow"
			      }
		  },
			{
		      "data": {
			  "id": "bescala",
			      "source": "be",
			      "target": "scala"
			      }
		  },
		  			{
		      "data": {
			  "id": "bec",
			      "source": "be",
			      "target": "c"
			      }
		  },
		  			{
		      "data": {
			  "id": "fejavascript",
			      "source": "fe",
			      "target": "javascript"
			      }
		  },
		  			{
		      "data": {
			  "id": "fecss",
			      "source": "fe",
			      "target": "css"
			      }
		  },
		  			{
		      "data": {
			  "id": "fehtml",
			      "source": "fe",
			      "target": "html"
			      }
		  },
		  			{
		      "data": {
			  "id": "feangular",
			      "source": "fe",
			      "target": "angular"
			      }
		  },
		  {
		  "data": {
			  "id": "beocaml",
			      "source": "be",
			      "target": "ocaml"
			      }
		  },
		  {
		  "data": {
			  "id": "javascriptwebsite",
			      "source": "javascript",
			      "target": "website"
			      }
		  },
		  {
		  "data": {
			  "id": "htmlwebsite",
			      "source": "html",
			      "target": "website"
			      }
		  },
		  {
		  "data": {
			  "id": "csswebsite",
			      "source": "css",
			      "target": "website"
			      }
		  },
		  {
		  "data": {
			  "id": "javascriptportal",
			      "source": "javascript",
			      "target": "portal"
			      }
		  },
		  {
		  "data": {
			  "id": "htmlportal",
			      "source": "html",
			      "target": "portal"
			      }
		  },
		  {
		  "data": {
			  "id": "cssportal",
			      "source": "css",
			      "target": "portal"
			      }
		  },
		  {
		  "data": {
			  "id": "tensorflowdeeplearning",
			      "source": "tensorflow",
			      "target": "deeplearning"
			      }
		  },
		  {
		  "data": {
			  "id": "pythondeeplearningfood",
			      "source": "python",
			      "target": "deeplearningfood"
			      }
		  },
		  {
		  "data": {
			  "id": "tensorflowdeeplearningfood",
			      "source": "tensorflow",
			      "target": "deeplearningfood"
			      }
		  },
		  {
		  "data": {
			  "id": "pythondeeplearningfood",
			      "source": "python",
			      "target": "deeplearningfood"
			      }
		  },
		  {
		  "data": {
			  "id": "tensorflowdeeplearningname",
			      "source": "tensorflow",
			      "target": "deeplearningname"
			      }
		  },
		  {
		  "data": {
			  "id": "pythondeeplearningname",
			      "source": "python",
			      "target": "deeplearningname"
			      }
		  }
		  ]    
	}
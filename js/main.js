const sliderApp = new Vue({//apro i lavori su vue
	el: '#root',//elemento con id root
	data: {
		imgSources: data.map( e => e.download_url ),//questo data è il nome dell'array del lorem picsum (non confondersi) + mappare gli elementi di data + estrarre gli elementi dall'url (con arrow function)
		currentSrcIndex: 0 //è l'indice che utilizzo per andare a prendere l'elemento nell'array
	},
  // Da qui comincio a lavorare sulle funzioni che mi permetteranno di cambiare immagine
	methods: {
		movePrev: function(){//funzione per cambiare immagine "in avanti"
			this.currentSrcIndex--;//l'indice -1
		},
		moveNext: function(){//funzione per cambiare immagine "indietro"
			this.currentSrcIndex++;//l'indice +1
		}
	}
})

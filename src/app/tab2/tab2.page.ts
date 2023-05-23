import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad',
      lancamento: '20/01/2008 (BR)',
      temporada: '5 temporadas',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/bb',
      favorito: false
    },
    {
      nome: 'Peaky Blinders',
      lancamento: '12/09/2013 (BR)',
      temporada: '6 temporadas',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/pb',
      favorito: false
    },
    {
      nome: "Jojo's Bizarre Adventure",
      lancamento: '06/10/2012 (BR)',
      temporada: '6 temporadas',
      classificacao: 9,
      cartaz: 'https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg',
      generos: ['Animação', 'Aventura', 'Ação'],
      pagina: '/jojos',
      favorito: false
    },
    {
      nome: 'The End of the F***ing World',
      lancamento: '24/10/2017 (BR)',
      temporada: '2 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zQ5fG5NAQ5K8cMm58bxQNwUEbMj.jpg',
      generos: ['Comédia', 'Drama', 'Crime'],
      pagina: '/end',
      favorito: false
    },
    {
      nome: 'Gotham',
      lancamento: '22/09/2014 (BR)',
      temporada: '5 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg',
      generos: ['Sci-fi & Fantasy', 'Drama', 'Crime'],
      pagina: '/gotham',
      favorito: false
    },
    {
      nome: 'Flash',
      lancamento: '07/10/2014 (BR)',
      temporada: '9 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy'],
      pagina: '/flash',
      favorito: false
    },
    {
      nome: 'Brooklyn Nine-Nine: Lei e Desordem',
      lancamento: '17/09/2013 (BR)',
      temporada: ' 8 temporadas',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hgRMSOt7a1b8qyQR68vUixJPang.jpg',
      generos: ['Comédia','Crime'],
      pagina: '/b99',
      favorito: false
    },
    {
      nome: 'Tudo bem não ser normal',
      lancamento: '20/07/2020 (BR)',
      temporada: '3 temporadas',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8yLqWlFSLMucnotlXFC8SHkfNTj.jpg',
      generos: ['Drama', 'Comédia'],
      pagina: '/tudobemnaosernormal',
      favorito: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [ //é um vetor de botões, tem q ter virgula para separar os itens 
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(serie:ISerie){
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            serie.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }

  desfavoritar(serie:ISerie){
    serie.favorito=false;
  }
}

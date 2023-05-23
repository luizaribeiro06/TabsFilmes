import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(public router: Router) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Scarlett Johansson',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uRxO44O5KjGBlP5xq3a6U0azp1H.jpg',
      filme: ['Viúva Negra', 'Vingadores: Ultimato (2019)'],
      pagina: '/scarlett-johansson',
      ocupacao: 'Atriz'
    },
    {
      nome: 'Robert Downey Jr.',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg',
      filme: ['Sherlock Holmes', 'Vingadores: Ultimato (2019)'],
      pagina: '/robert-downey-jr.',
      ocupacao: 'Ator'
    },
    {
      nome: 'Wilken Mazzei',
      cartaz: 'https://pbs.twimg.com/profile_images/447050311601909761/ZEi2-PCg_400x400.jpeg',
      filme: ["Jojo's Bizarre Adventure", 'Attack on Titan'],
      pagina: '/jotaro',
      ocupacao: 'Dublador'
    },
    {
      nome: 'Bryan Cranston',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aGSvZg7uITJveQtGHDcPNI6map1.jpg',
      filme: ['Breaking Bad', 'Argo'],
      pagina: '/bc',
      ocupacao: 'Ator'
    },
    {
      nome: 'Seo Yea-ji',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/a9moiE8WWuygU02m4KE3M2Nrrkp.jpg',
      filme: ['Tudo bem não ser normal', 'Eve'],
      pagina: '/seo',
      ocupacao: 'Atriz'
    },
    {
      nome: 'Jessica Barden',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A4WddlGjgLxcQfrILXmfHeaBD9p.jpg',
      filme: ['The End of The F***ing World', 'Hanna'],
      pagina: '/jessica',
      ocupacao: 'Atriz'
    },
    {
      nome: 'Josh Hartnett',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9JS3PeypxTmHVXOnLCMRzJzySxO.jpg',
      filme: ['40 days & 40 nights', 'Pearl Harbor'],
      pagina: '/josh-hartnett',
      ocupacao: 'Ator'
    },
    {
      nome: 'Zendaya',
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6TE2AlOUqcrs7CyJiWYgodmee1r.jpg',
      filme: ['Homem Aranha: Sem Volta Para Casa', 'Euphoria'],
      pagina: '/zendaya',
      ocupacao: 'Atriz'
    },
    {
      nome: 'Cillian Murphy',
      cartaz: 'https://bodysize.org/wp-content/uploads/2018/02/Cillian-Murphy-300x400.jpg',
      filme: ['Peaky Blinders', 'A origem'],
      pagina: '/cillian-murphy',
      ocupacao: 'Ator'
    }
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
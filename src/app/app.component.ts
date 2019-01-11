import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Posts';
  posts = [
    {
      title:'Les canards',
      content:'C\'est super bon mais sans les plombs... azdeofh azfeoihaz f oaihzf oahzfoh azoehf ohsdflkjh qsdfpjqsihfpoz zeriu pouzdfep^fpz fpuazf.',
    },
    {
      title:'Les chats',
      content:'J\'ai pas encore gouté... dqfgkjhdqsgf qsdfihudqsf qsdfiugzef qdzofuha zefoahzfe azoefuh azefohui azefoh feqsdfihju qsdfhouhouqsdf qsdohfiqsdofhi qsdfoihqsd qosdhf qsdofihohqsdofihàazu azeriuqf aqzfeiuf azfiuhjhfo.',
    },
    {
      title:'Mon 3ème post',
      content:'Bma bma bliblibbla bloup qsdfkjih qsdfjihqsdf qsdfihjuqsd qshqsd foihqsdfoihj qsdfazeoihfpi azerfiy fpiauzer apzour azeprufqgfu guiazeruezr zrekho izefr',
    }
  ]
}

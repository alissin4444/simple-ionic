import React from 'react';
import { 
  // Page content
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 

  // Fab content
  IonFab, 
  IonFabButton,
  IonIcon,

  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

  } from '@ionic/react';

import { add } from 'ionicons/icons';

import { RouteComponentProps } from "react-router";

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stranger Things</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <img src="http://s2.glbimg.com/DkR9s7JgjuPR4UupTb7H7ZZs8aE=/smart/e.glbimg.com/og/ed/f/original/2016/08/25/eleven.jpg" 
              style={{
                marginBottom: 26,
                borderRadius: 5
              }}
            />
            <IonCardSubtitle>Stranger Things</IonCardSubtitle>
            <IonCardTitle>Eleven</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Onze, codinome de Jane Hopper, é uma das personagens principais da série de televisão Stranger Things da Netflix. Ela é interpretada por Millie Bobby Brown...
          </IonCardContent>
        </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;

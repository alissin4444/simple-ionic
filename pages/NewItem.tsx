import React, { useState, useEffect } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList, 
  IonItem, 
  IonLabel, 
  IonProgressBar,
  IonAvatar,
  IonSkeletonText,
  IonListHeader,
  IonThumbnail
} from '@ionic/react';

import axios from "axios";

const NewItem: React.FC = () => {

  const [displayFetching, setDisplayFetching] = useState(true);

  const [items, setItems] = useState([{
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  }]);

  async function getItems() {
    await axios.get(`https://reqres.in/api/users?page=1`).then(response => {
      setTimeout(function(){ 
        const oldstate = [...response.data.data];
        setDisplayFetching(false);
        setItems(oldstate) 
    }, 3000);
      
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Lista de usuários</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      { displayFetching ? (<IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>) : "" }
        <IonList>
          { !displayFetching ? (
            <h4 style={{ color: "#888", marginLeft: 15 }}>
                Usuários
            </h4>
          ) : ""} 
          {items.map(item => {
              if(item.email) {
                return (
                <IonItem key={item.id}>
                  <IonAvatar slot="start">
                    <img src={item.avatar}/>
                  </IonAvatar>
                  <IonLabel>
                    <h2>{item.first_name}</h2>
                    <h3>{item.last_name}</h3>
                    <p>{item.email}</p>
                  </IonLabel>
                </IonItem>
                )  
              } else {
                return (
                  <IonList key={1}>
                    <IonListHeader>
                      <IonSkeletonText animated style={{ width: '20%' }} />
                    </IonListHeader>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonAvatar slot="start">
                        <IonSkeletonText animated />
                      </IonAvatar>
                      <IonLabel>
                        <h3>
                          <IonSkeletonText animated style={{ width: '50%' }} />
                        </h3>
                        <p>
                          <IonSkeletonText animated style={{ width: '80%' }} />
                        </p>
                        <p>
                          <IonSkeletonText animated style={{ width: '60%' }} />
                        </p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                )
              }
          })}
        </IonList>
      </IonContent>
  </IonPage>
  );
};
export default NewItem;
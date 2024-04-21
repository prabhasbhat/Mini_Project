// src/components/SideMenu.tsx
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Link } from 'react-router-dom';
import './SideMenu.css'; // Import the CSS file

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main" side="start">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/">
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button routerLink="/tab1">
            <IonLabel>Delivery</IonLabel>
          </IonItem>
          <IonItem button routerLink="/tab2">
            <IonLabel>Dining</IonLabel>
          </IonItem>
          <IonItem button routerLink="/tab3">
            <IonLabel>Events</IonLabel>
          </IonItem>
          <IonItem button routerLink="/login">
            <IonLabel>Login</IonLabel>
          </IonItem>
          <IonItem button routerLink="/signup">
            <IonLabel>Signup</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;

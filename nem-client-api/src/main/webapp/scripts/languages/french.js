define({
	id: 'fr',
	name: 'Fench',
	texts: {
		faults: {
            101: "Fichier non trouv�.",
            102: "Le portefeuille a �t� cr��.",
            103: "Le portefeuille est corrompu. S'il vous plait, r�cup�rez votre portefeuille � partir de la copie de sauvegarde que vous avez faite lors de la cr�ation de votre portefeuille or lorsque vous y avez ajout� un compte.",
            104: "Le mot de passe est incorrect. En esp�rant que vous pourrez vous en rappeler. Les mots de passe ne peuvent pas �tre r�cup�r�s s'ils sont perdus!",
            106: "Avant de pouvoir utiliser un portefeuille, il doit �tre ouvert. Pour s'assurer que vous autoriser � acc�der � ce portefeuille, vous devez fournir le mot de passe pour ce portefeuille.",
            107: "Ce portefeuille ne contient pas ce compte.",
            108: "Ce compte ne peut pas �tre retir�. Ce probl�me se produit g�n�ralement si vous tentez de retirer un compte avec une balance sup�rieure � 0 NEMs ou s'il s'agit de votre compte primaire.",
            109: "Un autre portefeuille avec le m�me nom existe d�j�. S'il vous plait, veuillez choisir un nom diff�rent.",
            110: "Le portefeuille contient d�j� ce compte.",
            202: "Un message chiffr� ne peut �tre envoy� si le destinataire n'a jamais effectu� de transaction auparavant.",
            305: "Le serveur d'infrastructure NEM n'est pas disponible.",
            306: "Une erreur que l'�quipe de d�veloppement n'avait pas anticip�e s'est produite. Nous vous pr�sentons nos excuses et nous esp�rons qu'un nouvel essai va r�gler ce probl�me. Sinon, ouvrez un billet d'incident aupr�s de la communaut� NIS/NCC de NEM.",
            400: "Certains param�tres sont manquants ou invalides.",
            404: "La ressource que vous avez demand� ne peut �tre trouv�e.",
            500: "Une erreur que l'�quipe de d�veloppement n'avait pas anticip�e s'est produite. Nous vous pr�sentons nos excuses et nous esp�rons qu'un nouvel essai va r�gler ce probl�me. Sinon, ouvrez un billet d'incident aupr�s de la communaut� NIS/NCC de NEM.",
            600: "NCC requiert que le serveur NIS soit d�marr� pour pouvoir envoyer et recevoir des transactions vers le nuage NEM. S'il vous plait, utilisez le menu NCC pour d�marrer le noeud local.",
            601: "Le noeud NIS est d�j� d�marr�. Une deuxi�me tentative de d�marrage du noeud est impossible.",
            700: "Le compte fourni ne satisfait pas les crit�res de base pour la r�colte. C'est g�n�ralement li� � la quantit� de NEM dans le compte. Le compte doit avoir au minimum 1000 NEM pour que la r�colte d�bute.",
            701: "La date limite fournie est dans le pass�. La date limite doit �tre dans un d�lai d�une journ�e.",
            702: "La date limite fournie est trop dans le futur. La date limite doit �tre dans un d�lai d�une journ�e.",
            703: "Votre compte n'a pas une balance suffisante pour envoyer le nombre nombre de NEMs indiqu�.",
            704: "Le message que vous avez inscrit est trop long pour �tre envoy� via NEM. Essayez de r�duire la taille du message que vous tentez d'exp�dier.",
            705: "Le hachage de transaction existe d�j� dans la base de donn�es ou dans la liste des transactions non confirm�es.",
            706: "La signature de la transaction n'a pas pu �tre v�rifi�e.",
            707: "L'horodatage de la transaction trop loin dans le pass�.",
            708: "TL'horodatage de la transaction trop loin dans le futur.",
            709: "Ce compte est inconnu. Un compte � besoin de faire partie d'au moins une transaction (comme exp�diteur ou destinataire) pour �tre connue du r�seau.",
            901: "Il y a une erreur lors de la mise en place du mode d�connect�."
        },
        common: {
        	success: 'Succ�s', //title of the Success message modals
        	nisStatus: {
        		unavailable: 'NIS est introuvable',
        		notBooted: "NIS � besoin d'�tre d�marr�. S'il vous plait, ouvrir votre portefeuille et d�marrer le noeud local via la bo�te de dialogue contextuelle.",
        		synchronizing: 'NIS est en cours de synchronisation. Pr�sentement au bloc {{1}}, est. {{2}} en retard.',
        		daysBehind: {
        			0: "moins d'une journ�e",
        			1: 'une journ�e',
        			many: '{{1}} jours'
        		}
        	}
        },
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERREUR {{1}}'
			},
			confirmDefault: {
				yes: 'Oui',
				no: 'Non'
			},
			sendNem: {
				title: 'Envoyez des NEMs',
				labelDesc: 'Ce compte est �tiquet� comme <strong>{{1}}</strong>',
				nullLabelDesc: "Ce compte n'est pas �tiquet�",
				amount: 'Montant',
				recipient: "Compte du destinataire",
				message: 'Message',
				encrypt: 'Chiffrez le message',
				fee: 'Frais',
				dueBy: 'Expire dans',
				resetFee: 'R�tablir les frais minimum',
				hours: 'heures',
				password: 'Mot de passe',
				send: 'Envoyez',
				sending: 'Envoi...',
				successMessage: 'La transaction a �t� envoy� avec succ�s!'
			},
			clientInfo: {
				title: 'Information sur le Client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signataire',
				remoteServer: 'Serveur distant',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronis�',
				notSync: 'Pas synchronis�',
				notConnected: 'Pas connect� au Nuage NEM',
				loading: 'Chargement...'
			},
			transactionDetails: {
				title: 'D�tails de la transaction',
				// this might be block or transaction ID
				id: 'ID',
				// this might be block or transaction Hash
				hash: 'Hash',
				type: 'Type de transaction',
				pending: 'En attente',
				outgoing: 'Sortant',
				incoming: 'Entrant',
				self: 'Sois m�me',
				sender: 'Exp�diteur',
				recipient: 'Destinataire',
				message: 'Message',
				noMessage: 'Aucun message',
				encrypted: 'Le Message est chiffr�',
				time: 'Horodatage',
				confirmations: 'Confirmations',
				amount: 'Montant',
				fee: 'Frais'
			},
			bootLocalNode: {
				title: 'D�marrage du noeud local',
				account: 'Compte pour d�marrarer le noeud local',
				noLabel: '<span class="null">&lt;Aucune �tiquette&gt;</span>',
				wallet: 'Portefeuille',
				node: 'Nom du noeud',
				boot: 'D�marrez',
				booting: 'D�marrage...'
			},
			notBootedWarning: {
				title: "Le noeud n'a pas �t� d�marr�!",
				message: "Un noeud local � besoin d'�tre d�marr� avant de pouvoir envoyer des NEMs!"
			},
			closeWallet: {
				title: 'Fermeture de portefeuille',
				message: "�tes-vous s�r de vouloir fermer ce portefeuille et retourner � la page d'accueil?"
			},
			createAccount: {
				title: 'Cr�er un nouveau compte',
				label: '�tiquette priv�',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} � �t� cr��!',
				create: 'Cr�er'
			},
			addAccount: {
				title: 'Ajouter un compte existant',
				privateKey: "Cl� priv� du compte",
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: "Le compte {{1}} {{#2}}({{2}}){{/2}} � �t� ajout� � votre portefeuille!",
				add: 'Ajouter',
				label: '�tiquette'
			},
			setPrimary: {
				title: 'D�finir votre compte principal',
				account: 'Le compte a �t� d�fini comme votre compte principal',
				noLabel: '<span class="null">&lt;Aucune �tiquette&gt;</span>',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} a �t� d�fini comme votre compte principal!',
				set: 'D�finir comme compte principal',
			},
			changeWalletName: {
				title: 'Changez le nom du portefeuille',
				wallet: 'Nom actuel du portefeuille',
				newName: 'Nouveau nom du portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le nom du portefeuille a �t� chang� avec succ�s de <em>{{1}}</em> � <em>{{2}}</em>',
				change: 'Changer'
			},
			changeWalletPassword: {
				title: 'Changer le mot de passe du portefeuille',
				wallet: 'Portefeuille',
				password: 'Mot de passe actuel du portefeuille',
				newPassword: 'Nouveau mot de passe',
				confirmPassword: 'Confirmer le nouveau mot de passe',
				successMessage: 'Le mot de passe du portefeuille a �t� chang� avec succ�s',
				change: 'Changer',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: "Le mot de passe et le mot de passe de confirmation ne sont pas pareils. S'il vous plait, assurez-vous de taper votre nouveau mot de passe correctement."
			},
			changeAccountLabel: {
				title: "Changer l'�tiquette du compte",
				label: '�tiquette du compte',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} est maintenant �tiquett� comme {{2}}',
				change: 'Changer'
			},
			removeAccount: {
				title: 'Retirer un compte',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				warning: "S'il vous plait, assurez-vous que ce compte ne contient plus de NEMs avant de le retirer, sinon les NEMs qu'il contient seront perdus pour toujours.",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} � �t� retir�!',
				remove: 'Retirer'
			},
			nisUnavailable: {
				title: 'NIS est non disponible',
				message: 'D�connect� de NIS, en attente de connexion'
			},
			shutdown: {
				title: "Fermeture de l'application",
				message: "�tes-vous certain de vouloir fermer l'application NEM Community Client?"
			}
		},
		landing: {
			importSuccess: 'Le portefeuille a �t� import� avec succ�s!',
			nav: {
				start: '<strong>Commencer</strong>',
				about: '� propos de <strong>NEM</strong>',
				help: '<strong>Aide</strong>'
			},
			main: {
				leftTitle: 'Nouveau dans <em>NEM</em>?',
				leftButton: 'Cr�er un nouveau portefeuille ',
				walletNamePlh: 'Nom de votre portefeuille',
				passwordPlh: 'Mot de passe',
				create: 'Cr�er',
				rightTitle: 'D�j� un <em>NEM</em>bre?',
				rightButton: 'Ouvrir votre portefeuille',
				openButton: 'Ouvrir',
				walletsFound: '<strong>{{1}}</strong> <em>portefeuille(s) trouv�(s)</em>',
				copyright: 'Photographie par <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>s�curit�</em> est tr�s importante pour �viter le vols de vos pi�ces NEMs &amp; actifs.'
					},
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>s�curit�</em> est tr�s importante pour �viter le vols de vos pi�ces NEMs &amp; actifs.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Comment NCC fonctionne?',
						paragraphs: [
							'<strong>NCC</strong>offre un acc�s � vos actifs et vos NEMs comme un portefeuille traditionnel le ferait.',
							"<strong>NCC</strong> requiert l'acc�s � un serveur <strong>NIS</strong> pour pouvoir �tre fonctionnelle. Le standard est d'avoir un serveur local actif (est install� ensemble avec <strong>NCC</strong>)",
							'Vous pouvez aussi configurer un acc�s � un serveur <strong>NIS</strong> distant.'
						],
						listItems: [
							'Multiples portefeuilles',
							'D�finir de multiple compte � �tre inclus dans votre portefeuille'
						]
					},
					{
						title: "Qu'est-ce que le &#42;NIS?",
						paragraphs: [
							'Cette composante est responsable de garder le nuage <strong>NEM</strong> vivant.',
							'Plus il y a de <strong>NIS</strong> meilleure est la s�curit�.',
							"<strong>NIS</strong> est le point d'acc�s au nuage <strong>NEM</strong>."
						],
						legend: "<strong>&#42;NIS</strong> signifie <strong>Serveur d'infrastructure NEM (NEM Infrastructure Server)</strong>"
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			lastAccess: 'Il y a approximativement {{1}} jours',
			lastAccessJustNow: 'Juste maintenant',
			lastAccessTooltip: 'Dernier acc�s {{1}}',
			primary: 'primaire',
			primaryShort: 'P',
			noLabel: "<Pas d'�tiquette>",
			copyToClipboard: "Cliquez ici pour copier l'adresse dans le presse papier",
			copiedToClipboard: "L'adresse a �t� copi� dans le presse papier!",
			actions: {
				refreshInfo: 'Actualiser les informations',
				bootLocalNode: 'D�marr� le noeud local',
				changeWalletName: 'Changer le nom du portefeuille',
				changeWalletPassword: 'Changer le mot de passe du portefeuille',
				mergeWallets: 'Fusionner des portefeuilles',
				exportWallet: 'Exporter un portefeuille',
				createAccount: 'Cr�er un nouveau compte',
				addAccount: 'Ajouter un compte existant',
				changeAccountLabel: "Modifier l'�tiquette du compte",
				setPrimary: 'D�finir comme compte primaire',
				removeAccount: 'Retirer le compte',
				clientInfo: 'Information sur le Client',
				closeWallet: 'Fermer le portefeuille',
				closeProgram: "Fermer l'application"
			},
			nav: [
				"Tableau de bord",
				"Messages",
				"Contacts",
				"Transactions",
				"Blocs r�colt�s",
				"Bourse d'actif",
				"Nouvelles",
				"Applications",
				"Comptes",
				"Param�tres",
				"Fermer l'application"
			],
			bootNodeWarning: "Un noeud local doit �tre d�marr� avant de pouvoir utiliser pleinement les fonctionnalit�s de NCC."
		},
		dashboard: {
			assets: {
				title: 'Vos actifs'
			},
			importance: {
				title: "Score d'importance",
				unknown: 'statut inconnu',
				start: 'Lancer la r�colte',
				harvesting: 'R�colte',
				stop: 'Arr�ter la r�colte',
				description: 'importance de compte dans le nuage NEM'
			},
			transactions: {
				title: 'Transactions r�centes',
				sendNem: 'Envoyer des NEMs',
				balance: 'Balance courante',
				syncStatus: '(au blocs {{1}}{{#2}} : est. {{3}} jours en retard{{/2}})',
				unknown: 'inconnu',
				columns: [
					'',
					'Temps',
					'Exp�diteur/Destinataire',
					'Message',
					'',
					'D�tails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				types: {
					pending: 'Transaction en attente',
					outgoing: 'Transaction sortante',
					incoming: 'Transaction entrante',
					self: 'Transaction vers sois m�me',
				},
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiff�',
				view: 'Voir',
				pending: 'En attente',
				seeAll: 'Voir toutes les transactions',
				noTransactions: "Aucune transaction n'a encore �t� effectu�e"
			},
			nemValue: {
				title: 'Statistiques sur la valeur de NEM'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'Nouvelles'
			},
			notAvailable: 'Pas encore disponible en version alpha'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Envoyer des NEMs',
			balance: 'Balance courante',
			filters: {
				all: 'Toutes les transactionss',
				pending: 'En attent',
				incoming: 'Entrante',
				outgoing: 'Sortante',
			},
			table: {
				columns: [
					'',
					'Temps',
					'Exp�diteur/Destinataire',
					'Message',
					'',
					'D�tails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				types: {
					pending: 'Transaction en attente',
					outgoing: 'Transaction sortante',
					incoming: 'Transaction entrante',
					self: 'Transaction vers sois m�me',
				},
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiff�',
				view: 'Voir',
				pending: 'En attente',
				noTransactions: "Aucune transaction n'a encore �t� effectu�e",
				loading: 'Chargement de transactions suppl�mentaire...'
			}
		},
		harvestedBlocks: {
			title: 'Blocs r�colt�s',
			feeEarned: 'Honoraires per�us pour les 25 derniers blocs r�colt�s',
			table: {
				columns: [
					'Hauteur',
					'Temps',
					'Hachage du bloc',
					'Honoraires'
				],
				noBlocks: 'Aucun blocs r�colt�s ',
				loadMore: 'Voir les blocs r�colt�s plus �g�es'
			},
			harvesting: {
				unknown: 'Statut inconnu',
				start: 'Lancer la r�colte',
				harvesting: 'R�colte',
				stop: 'Arr�ter la r�colte'
			}
		},
		settings: {
			title: 'Param�tres',
			settings: [
				{
					name: 'Langue'
				}
			],
			save: 'Enregistrer les modifications',
			saveSuccess: '`Les param�tres ont �t� enregistr�s avec succ�s'
		}
	}
});
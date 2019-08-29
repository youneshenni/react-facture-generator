import React from "react";
import Table from "./Table";
import VerticalTable from "./VerticalTable";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  client: {
    fontWeight: "bold",
    fontSize: "10pt"
  },
  seller: {
    marginRight: 50,
    fontSize: "10pt",
    fontWeight: "bold"
  },
  facture: {
    fontSize: "26pt",
    alignSelf: "center"
  },
  factureContainer: {
    marginLeft: "10.9mm",
    backgroundColor: "#dcdcdc",
    width: "40.1mm",
    height: "10.16mm",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    textDecoration: "underline",
    marginLeft: "10.9mm",
    fontSize: "8pt",
    marginTop: "10mm"
  },
  warning: {
    fontWeight: "bold",
    fontSize: "8pt",
    marginLeft: "10.9mm",
    marginTop: "5mm"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: "0.25mm",
    borderBottomColor: "#e0e0e0",
    width: "200.36mm",
    paddingBottom: "4mm",
    paddingLeft: "2mm"
  }
});
const facture = {
  Numéro: ["FA00000010"],
  Date: ["31/01/2019"],
  "Code client": ["CL00002"],
  "Date échéance": ["28/02/2019"],
  "Mode de règlement": ["Virement"],
  "N° de Tva intracom": ["FR28822715173"]
};
const echeances = {
  Code: ["AR00016", "AR00025", "AR00026", "AR00027"],
  Description: [
    "Prestation informatique - INFOGERANCE - LES ULYS du02/ 01/ 2019 au  22,00 130,00 2 860,00 0,00  31/ 01/ 2019 - Forfait journée",
    "Mission AEW - DELFRANCO Jordan - Forfait Journée",
    "Mission AREVA - TSIKY-LY",
    "Mission AREVA - Mohamed SAGNA"
  ],
  Qté: ["22,00", "4,00", "3,00", "20,00"],
  "P.U. HT": ["130,00", "130,00", "130,00", "130,00"],
  "Montant HT": ["2 860,00", "520,00", "390,00", "2 600,00"],
  TVA: ["0,00", "0,00", "0,00", "0,00"]
};

const recapitulatifEcheances = {
  "Date d'échéance": ["28/02/2019"],
  "Mode de paiement": ["Virement SEPA"],
  "Montant de l'échéance": ["6 370,00 €"],
  "Solde dû": ["6 370,00 €"]
};
const overall = {
  Taux: ["0,00"],
  "Base HT": ["6 370,00"],
  "Montant TVA": [""]
};
const final = {
  "Total HT": ["6 370,00"],
  "Remise 0,00%": ["0,00"],
  "Total HT remisé": ["6 370,00"],
  "Port HT": ["0,00"],
  "Total HT Net": ["6 370,00"],
  "Total TVA": ["0,00"],
  "Total TTC": ["6 370,00"],
  Acomptes: ["0,00"],
  "Net à payer": ["6 370,00"]
};

const App = () => (
  <PDFViewer
    width="100%"
    height={window.innerHeight - window.innerHeight * 0.05}
  >
    <Document>
      <Page size="A4">
        <View style={styles.client}>
          <Text style={{ marginLeft: "10mm", marginTop: "10mm" }}>
            BEURARD RICHARD
          </Text>
          <Text style={{ marginLeft: "10mm" }}>1, Allée Du Parc</Text>
          <Text style={{ marginLeft: "10mm" }}>91700 FLEURY-MEROGIS</Text>
          <Text style={{ marginLeft: "10mm" }}>Tél : 0619291789</Text>
          <Text style={{ marginLeft: "10mm" }}>Tél portable : 0619291789</Text>
        </View>
        <View style={styles.seller}>
          <Text style={{ marginLeft: "131mm", marginTop: "36.4mm" }}>
            SASU MTEK
          </Text>
          <Text style={{ marginLeft: "131mm" }}>2, Avenue Buffon</Text>
          <Text style={{ marginLeft: "131mm" }}>93420 VILLEPINTE</Text>
        </View>
        <View style={styles.factureContainer}>
          <Text style={styles.facture}>Facture</Text>
        </View>
        <Table data={facture} />
        <Table data={echeances} height="62.5mm" />
        <Text style={styles.title}>Récapitulatif des échéances :</Text>
        <Table data={recapitulatifEcheances} />
        <View style={styles.warning}>
          <Text>Escompte pour règlement anticipé : 0%</Text>
          <Text>
            En cas de retard de paiement, une pénalité égale à 3 fois le taux
            d'intérêt légal sera exigible (Décret 2009-138 du 9 février 2009).
          </Text>
          <Text>
            Pour les professionnels, une indemnité minimum forfaitaire de 40
            euros pour frais de recouvrement sera exigible (Décret 2012-1115 du
            9 octobre 2012).
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Table data={overall} width="66mm" height="25.15mm" />
          <VerticalTable data={final} width="65.8mm" />
        </View>
        <Text
          style={{ fontSize: "8pt", textAlign: "center", marginTop: "5mm" }}
        >
          Siret : 81867952400012 - APE : 6202A - N° TVA intracom : FR39818679524
        </Text>
      </Page>
    </Document>
  </PDFViewer>
);

export default App;

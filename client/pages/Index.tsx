import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Calendar,
  Phone,
  MapPin,
  Heart,
  Activity,
  FileText,
  Camera,
  Stethoscope,
  Brain,
  Zap,
  Download,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Index() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  // Mock patient data
  const patient = {
    id: "PAT-2024-001",
    nom: "Dubois",
    prenom: "Marie",
    dateNaissance: "1985-03-15",
    age: 39,
    genre: "Féminin",
    telephone: "01 23 45 67 89",
    adresse: "123 Rue de la République, 75001 Paris",
    numeroSecu: "2 85 03 75 123 456 78",
    medecin: "Dr. Martin Lefebvre",
    service: "Cardiologie",
  };

  const examens = [
    {
      id: "EX-001",
      type: "Radiographie thoracique",
      date: "2024-01-15",
      medecin: "Dr. Rousseau",
      statut: "positif",
      diagnostic: "Pneumonie lobaire droite",
      traitement: "Antibiothérapie prescrite",
      images: 2,
      icon: Camera,
    },
    {
      id: "EX-002",
      type: "IRM cérébrale",
      date: "2024-01-10",
      medecin: "Dr. Moreau",
      statut: "négatif",
      diagnostic: "Aucune anomalie détectée",
      traitement: "Surveillance recommandée",
      images: 24,
      icon: Brain,
    },
    {
      id: "EX-003",
      type: "Échographie cardiaque",
      date: "2024-01-08",
      medecin: "Dr. Lefebvre",
      statut: "positif",
      diagnostic: "Insuffisance mitrale légère",
      traitement: "Suivi cardiologique",
      images: 8,
      icon: Heart,
    },
    {
      id: "EX-004",
      type: "Scanner abdominal",
      date: "2024-01-05",
      medecin: "Dr. Bernard",
      statut: "négatif",
      diagnostic: "Examen normal",
      traitement: "Aucun traitement nécessaire",
      images: 156,
      icon: Activity,
    },
  ];

  const consultations = [
    {
      date: "2024-01-15",
      type: "Consultation cardiologie",
      medecin: "Dr. Lefebvre",
      diagnostic: "Hypertension artérielle",
      traitement: "Modification du traitement antihypertenseur",
    },
    {
      date: "2024-01-10",
      type: "Consultation neurologie",
      medecin: "Dr. Moreau",
      diagnostic: "Céphalées de tension",
      traitement: "Traitement symptomatique",
    },
  ];

  const laboratoire = [
    {
      date: "2024-01-12",
      type: "Bilan lipidique",
      resultats: "Cholestérol total: 2.1 g/L (Normal)",
      status: "normal",
    },
    {
      date: "2024-01-12",
      type: "Numération formule sanguine",
      resultats: "Hémoglobine: 13.5 g/dL (Normal)",
      status: "normal",
    },
    {
      date: "2024-01-10",
      type: "Troponine",
      resultats: "0.02 ng/mL (Élevé)",
      status: "anormal",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">
                MediCare Pro
              </h1>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm text-muted-foreground">
              Dossier Patient
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{patient.service}</Badge>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Patient Identity Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Identité du Patient</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                  {patient.prenom[0]}
                  {patient.nom[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {patient.prenom} {patient.nom}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ID: {patient.id}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {patient.dateNaissance} ({patient.age} ans)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{patient.genre}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{patient.telephone}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>{patient.adresse}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">
                      Numéro de sécurité sociale
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {patient.numeroSecu}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Médecin référent</p>
                    <p className="text-sm text-muted-foreground">
                      {patient.medecin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical History Tabs */}
        <Tabs defaultValue="examens" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="examens"
              className="flex items-center space-x-2"
            >
              <Camera className="h-4 w-4" />
              <span>Imagerie & PACS</span>
            </TabsTrigger>
            <TabsTrigger
              value="consultations"
              className="flex items-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Consultations</span>
            </TabsTrigger>
            <TabsTrigger
              value="laboratoire"
              className="flex items-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Laboratoire</span>
            </TabsTrigger>
            <TabsTrigger
              value="historique"
              className="flex items-center space-x-2"
            >
              <Clock className="h-4 w-4" />
              <span>Historique</span>
            </TabsTrigger>
          </TabsList>

          {/* Imaging & PACS Tab */}
          <TabsContent value="examens" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Examens d'imagerie récents
                </h3>
                {examens.map((examen) => {
                  const IconComponent = examen.icon;
                  return (
                    <Card
                      key={examen.id}
                      className={`cursor-pointer transition-all ${
                        selectedExam === examen.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedExam(examen.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">
                                {examen.type}
                              </h4>
                              <Badge
                                variant={
                                  examen.statut === "positif"
                                    ? "destructive"
                                    : "default"
                                }
                                className="text-xs"
                              >
                                {examen.statut === "positif" ? (
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                ) : (
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                )}
                                {examen.statut}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">
                              {examen.date} • {examen.medecin}
                            </p>
                            <p className="text-sm font-medium">
                              {examen.diagnostic}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {examen.images} images disponibles
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Exam Details Panel */}
              <div className="space-y-4">
                {selectedExam ? (
                  (() => {
                    const examen = examens.find((e) => e.id === selectedExam);
                    if (!examen) return null;

                    return (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>Détails de l'examen</span>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Voir images
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Type d'examen
                            </h4>
                            <p className="text-sm">{examen.type}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Date et médecin
                            </h4>
                            <p className="text-sm">
                              {examen.date} • {examen.medecin}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Diagnostic
                            </h4>
                            <p className="text-sm">{examen.diagnostic}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Traitement recommandé
                            </h4>
                            <p className="text-sm">{examen.traitement}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">
                              Images PACS
                            </h4>
                            <p className="text-sm">
                              {examen.images} images disponibles
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {Array.from({
                                length: Math.min(6, examen.images),
                              }).map((_, i) => (
                                <div
                                  key={i}
                                  className="aspect-square bg-muted rounded-lg flex items-center justify-center"
                                >
                                  <Camera className="h-6 w-6 text-muted-foreground" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })()
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Sélectionnez un examen pour voir les détails
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Consultations Tab */}
          <TabsContent value="consultations" className="space-y-4">
            <h3 className="text-lg font-semibold">Consultations récentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultations.map((consultation, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">
                          {consultation.type}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {consultation.date} • {consultation.medecin}
                        </p>
                        <p className="text-sm font-medium mb-1">
                          {consultation.diagnostic}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {consultation.traitement}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Laboratory Tab */}
          <TabsContent value="laboratoire" className="space-y-4">
            <h3 className="text-lg font-semibold">Analyses de laboratoire</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {laboratoire.map((analyse, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">
                            {analyse.type}
                          </h4>
                          <Badge
                            variant={
                              analyse.status === "anormal"
                                ? "destructive"
                                : "default"
                            }
                            className="text-xs"
                          >
                            {analyse.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {analyse.date}
                        </p>
                        <p className="text-sm">{analyse.resultats}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="historique" className="space-y-4">
            <h3 className="text-lg font-semibold">
              Historique médical complet
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Antécédents médicaux</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hypertension artérielle (2022)</li>
                      <li>• Pneumonie (2023)</li>
                      <li>• Allergie à la pénicilline</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Traitements actuels</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Amlodipine 5mg - 1 fois/jour</li>
                      <li>• Simvastatine 20mg - le soir</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Prochains rendez-vous
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consultation cardiologie - 15/02/2024</li>
                      <li>• Contrôle biologique - 20/02/2024</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

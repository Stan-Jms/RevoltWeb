import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { staggerContainerVariants, staggerItemVariants } from '@/components/motion/variants'
import { Wrench, PlugZap, ShieldCheck, Euro, CheckCircle2 } from 'lucide-react'

const BecomeChargerPage = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={staggerItemVariants}>
              <Badge variant="outline" className="mb-4">Hébergez une borne</Badge>
            </motion.div>
            <motion.h1 variants={staggerItemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
              Devenez hôte ReVOLT
            </motion.h1>
            <motion.p variants={staggerItemVariants} className="text-muted-600 text-lg">
              Installez une borne chez vous ou sur votre site et générez des revenus tout en accélérant la transition électrique.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div variants={staggerItemVariants} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <CardTitle>Installation simple</CardTitle>
                  <CardDescription>Audit rapide, devis transparent, pose réalisée par un électricien certifié IRVE.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-success-50 text-success-600 flex items-center justify-center mb-3">
                    <Euro className="w-6 h-6" />
                  </div>
                  <CardTitle>Modèle rentable</CardTitle>
                  <CardDescription>Tarif conseillé: 2,10€/h standard, 6,60€/h superchargeur. Frais ReVOLT: 1€ + 12%/session.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-warning-50 text-warning-600 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <CardTitle>Assistance & assurance</CardTitle>
                  <CardDescription>Support 24/7, gestion des paiements et couverture en cas d'incident.</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center mb-3">
                  <PlugZap className="w-6 h-6" />
                </div>
                <CardTitle>Comment ça se passe ?</CardTitle>
                <CardDescription>Du premier contact à la première recharge, en 4 étapes claires.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-700">
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-600" /> Validation technique et devis</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-600" /> Installation et mise en service</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-600" /> Publication de votre borne sur ReVOLT</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-600" /> Suivi des revenus et support continu</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>S’inscrire pour devenir hôte</CardTitle>
                <CardDescription>Remplissez le formulaire, notre équipe vous recontacte sous 48h.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom complet</label>
                    <input className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-500" placeholder="Jane Doe" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input type="email" className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-500" placeholder="jane@exemple.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Téléphone</label>
                      <input className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-500" placeholder="+33…" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Adresse d’installation</label>
                    <input className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-500" placeholder="Rue, ville" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Type de borne envisagé</label>
                    <select className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                      <option>Standard (~2,10€/h)</option>
                      <option>Superchargeur (~6,60€/h)</option>
                    </select>
                  </div>
                  <Button type="button" className="w-full">Je m’inscris</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomeChargerPage



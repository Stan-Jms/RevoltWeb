import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HelpCircle,
  Bug,
  Lightbulb,
  User,
  Building
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { useToast } from '@/hooks/use-toast'
import { 
  staggerContainerVariants, 
  staggerItemVariants,
  scrollRevealVariants 
} from '@/components/motion/variants'
import { cn } from '@/lib/cn'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'contact@revolt.com',
      details: 'Réponse sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      description: '+33 1 23 45 67 89',
      details: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      description: '123 Avenue des Champs-Élysées',
      details: '75008 Paris, France'
    },
    {
      icon: Clock,
      title: 'Support',
      description: 'support@revolt.com',
      details: '24/7 pour les utilisateurs Pro'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'Question générale' },
    { value: 'support', label: 'Support technique' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'press', label: 'Presse & Médias' },
    { value: 'career', label: 'Carrières' },
    { value: 'feedback', label: 'Retour d\'expérience' }
  ]

  const subjectIcons = {
    general: MessageCircle,
    support: HelpCircle,
    partnership: Building,
    press: User,
    career: User,
    feedback: Lightbulb
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    const errors = []
    
    if (!formData.name.trim()) errors.push('Le nom est requis')
    if (!formData.email.trim()) errors.push('L\'email est requis')
    if (!formData.email.includes('@')) errors.push('L\'email n\'est pas valide')
    if (!formData.inquiryType) errors.push('Le type de demande est requis')
    if (!formData.message.trim()) errors.push('Le message est requis')
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (errors.length > 0) {
      toast({
        title: "Erreur de validation",
        description: errors.join(', '),
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "success"
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: ''
      })
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqItems = [
    {
      question: 'Comment puis-je signaler un problème avec une borne de recharge ?',
      answer: 'Vous pouvez signaler un problème directement dans l\'application en cliquant sur "Signaler un problème" dans les détails de la borne, ou nous contacter via ce formulaire.'
    },
    {
      question: 'Quels sont les délais de réponse pour le support ?',
      answer: 'Nous nous engageons à répondre à toutes les demandes dans les 24h pour les questions générales, et dans les 4h pour les utilisateurs Pro.'
    },
    {
      question: 'Puis-je devenir partenaire de ReVOLT ?',
      answer: 'Oui ! Nous sommes toujours à la recherche de nouveaux partenaires. Contactez-nous via le formulaire en sélectionnant "Partenariat" comme type de demande.'
    },
    {
      question: 'Comment puis-je proposer une nouvelle fonctionnalité ?',
      answer: 'Nous adorons recevoir vos suggestions ! Utilisez le type de demande "Retour d\'expérience" pour nous faire part de vos idées d\'amélioration.'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItemVariants} className="mb-6">
              <Badge variant="secondary" className="mb-4">
                📞 Contact
              </Badge>
            </motion.div>

            <motion.h1 
              variants={staggerItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              Nous sommes là pour vous{' '}
              <span className="text-gradient">aider</span>
            </motion.h1>

            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Une question, un problème, ou simplement envie de nous faire part de votre expérience ? 
              Notre équipe est à votre écoute.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-2">{info.description}</p>
                    <p className="text-sm text-muted-600">{info.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-muted-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              variants={staggerContainerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItemVariants} className="mb-8">
                <Badge variant="outline" className="mb-4">
                  Envoyez-nous un message
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Contactez-nous
                </h2>
                <p className="text-muted-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </motion.div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Entreprise (optionnel)
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
                        Type de demande *
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de demande" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => {
                            const IconComponent = subjectIcons[type.value as keyof typeof subjectIcons]
                            return (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center space-x-2">
                                  <IconComponent className="w-4 h-4" />
                                  <span>{type.label}</span>
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Sujet (optionnel)
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre demande en détail..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={staggerContainerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItemVariants} className="mb-8">
                <Badge variant="outline" className="mb-4">
                  Questions fréquentes
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  FAQ
                </h2>
                <p className="text-muted-600">
                  Trouvez rapidement les réponses aux questions les plus courantes.
                </p>
              </motion.div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItemVariants}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Besoin d'aide immédiate ?
            </motion.h2>
            <motion.p 
              variants={staggerItemVariants}
              className="text-xl text-primary-100 mb-8"
            >
              Notre équipe de support est disponible 24/7 pour les utilisateurs Pro. 
              Pour les questions urgentes, appelez-nous directement.
            </motion.p>
            <motion.div 
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 w-5 h-5" />
                Appeler maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat en direct
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

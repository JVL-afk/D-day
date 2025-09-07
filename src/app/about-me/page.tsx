'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Target, 
  Lightbulb, 
  Award, 
  Users, 
  TrendingUp,
  Heart,
  Globe,
  Zap,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'

export default function AboutMePage() {
  const [activeTab, setActiveTab] = useState('story')

  const stats = [
    { label: 'Websites Created', value: '10,000+', icon: Globe },
    { label: 'Happy Users', value: '5,000+', icon: Users },
    { label: 'Revenue Generated', value: '$2M+', icon: TrendingUp },
    { label: 'Success Rate', value: '95%', icon: Award }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'The Vision',
      description: 'Identified the need for automated affiliate marketing solutions',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'First Prototype',
      description: 'Built the initial AI-powered website generator',
      icon: Zap
    },
    {
      year: '2022',
      title: 'Beta Launch',
      description: 'Launched beta version with 100 early adopters',
      icon: Users
    },
    {
      year: '2023',
      title: 'Major Growth',
      description: 'Reached 1,000+ users and $500K in generated revenue',
      icon: TrendingUp
    },
    {
      year: '2024',
      title: 'Enterprise Features',
      description: 'Added advanced analytics, A/B testing, and team collaboration',
      icon: Award
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding to serve affiliate marketers worldwide',
      icon: Globe
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and automation.',
      icon: Lightbulb,
      color: 'bg-blue-500'
    },
    {
      title: 'Transparency',
      description: 'We believe in honest communication and clear pricing with no hidden fees.',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      title: 'Success',
      description: 'Your success is our success. We\'re committed to helping you achieve your goals.',
      icon: Target,
      color: 'bg-purple-500'
    },
    {
      title: 'Community',
      description: 'We foster a supportive community of affiliate marketers helping each other grow.',
      icon: Heart,
      color: 'bg-red-500'
    }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Former Google engineer with 10+ years in AI and machine learning. Passionate about democratizing affiliate marketing.',
      image: '/team/alex.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson',
        github: 'https://github.com/alexjohnson'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack developer and AI specialist. Led engineering teams at Microsoft and Amazon.',
      image: '/team/sarah.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Marketing',
      bio: 'Digital marketing expert with 8+ years helping businesses scale their online presence.',
      image: '/team/mike.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/mikerodriguez',
        twitter: 'https://twitter.com/mikerodriguez'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Head of Customer Success',
      bio: 'Customer experience specialist dedicated to ensuring every user achieves their affiliate marketing goals.',
      image: '/team/emily.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      }
    }
  ]

  const achievements = [
    'Featured in TechCrunch as "Top AI Startup to Watch"',
    'Winner of the 2024 MarTech Innovation Award',
    'Recognized by Forbes as "30 Under 30" in Technology',
    'Achieved 99.9% uptime across all services',
    'Generated over $2M in revenue for our users',
    'Maintained 4.9/5 star rating across all platforms'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AFFILIFY
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Empowering affiliate marketers worldwide with AI-powered tools that transform 
              how you create, manage, and optimize your affiliate websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Our Story
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
                Meet the Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'story', label: 'Our Story', icon: User },
              { id: 'mission', label: 'Mission & Values', icon: Target },
              { id: 'timeline', label: 'Timeline', icon: Calendar },
              { id: 'team', label: 'Team', icon: Users },
              { id: 'achievements', label: 'Achievements', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Our Story */}
          {activeTab === 'story' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  AFFILIFY was born from a simple frustration: creating high-converting affiliate 
                  websites was too time-consuming, expensive, and required technical skills that 
                  most marketers didn't have.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our founder, Alex Johnson, spent countless hours manually building affiliate sites, 
                  testing different layouts, writing copy, and optimizing for conversions. After 
                  achieving success with his own affiliate business, he realized there had to be a 
                  better way.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  In 2020, Alex assembled a team of AI engineers, marketing experts, and successful 
                  affiliate marketers to build the solution he wished existed. The goal was simple: 
                  democratize affiliate marketing by making it accessible to anyone, regardless of 
                  their technical background.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, AFFILIFY has helped thousands of marketers launch successful affiliate 
                  businesses, generating millions in revenue and proving that with the right tools, 
                  anyone can succeed in affiliate marketing.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do What We Do</h3>
                  <p className="text-lg text-gray-700">
                    We believe that everyone deserves the opportunity to build a successful online 
                    business. By removing the technical barriers and providing powerful AI-driven 
                    tools, we're leveling the playing field and empowering the next generation of 
                    affiliate marketers.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Mission & Values */}
          {activeTab === 'mission' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Mission & Values</h2>
              
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl mb-16">
                <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
                <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
                  To democratize affiliate marketing by providing AI-powered tools that enable 
                  anyone to create, manage, and optimize high-converting affiliate websites 
                  without technical expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${value.color} rounded-lg mb-6`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Timeline */}
          {activeTab === 'timeline' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start mb-12"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      <milestone.icon className="w-8 h-8" />
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-xl shadow-lg flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Team */}
          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Achievements</h2>
              
              <div className="grid gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">What's Next?</h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  We're just getting started. Our roadmap includes advanced AI features, 
                  international expansion, and new tools that will continue to revolutionize 
                  the affiliate marketing industry.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about our story or want to learn more about AFFILIFY? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@affilify.com"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              <ArrowRight className="w-5 h-5" />
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


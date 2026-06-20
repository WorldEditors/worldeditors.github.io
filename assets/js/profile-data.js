window.PROFILE_DATA = {
  about: [
    "I am an AI research scientist and engineering leader working at the intersection of foundation models, reinforcement learning, embodied intelligence, and autonomous systems.",
    "My work spans from frontier research to real-world deployment, with experience building large-model products, autonomous driving systems, dialogue models, and AI for scientific discovery.",
    "I am currently focused on lifelong learning agents and foundation models that can adapt, reason, and improve across environments, embodiments, and tasks."
  ],
  previewLimits: {
    publications: 4,
    experiences: 3
  },
  experiences: [
    {
      period: "2024 - Present",
      organization: "Shenzhen Institute of AI and Robotics for Society (AIRS)",
      role: "Research Scientist - Multimodal and Embodied Foundation Models",
      highlights: [
        "Develop next-generation in-context learning, foundation decision models, and world models for adaptive agents.",
        "Validate small-scale models across navigation, cross-scenario generalization, and cross-embodiment motion control tasks.",
        "Lead research connected to the OmniRL direction and embodied foundation model development."
      ],
      links: [
        {
          label: "OmniRL Project Page",
          url: "https://airs.cuhk.edu.cn/en/OmniRL"
        }
      ]
    },
    {
      period: "2024 (Jan-Aug)",
      organization: "Baidu NLP Department",
      role: "ERNIE Bot Post-training (T10)",
      highlights: [
        "Proposed and deployed a multi-objective Pareto-optimization DPO solution that improved 10B-scale model performance.",
        "Explored autonomous evolution loops that combine generation and evaluation to improve multi-round DPO training.",
        "Expanded the data synthesis agenda toward multimodal and embodied settings, including autonomous driving."
      ]
    },
    {
      period: "2022 - 2023",
      organization: "Baidu Inc. - DARPA Virtual Project",
      role: "Lead of Autonomous Driving 2.0 Foundation Model Team (T10)",
      highlights: [
        "Supported group-level technology planning for next-generation autonomous driving.",
        "Proposed end-to-end autonomous driving systems that combine world models with decision models.",
        "Delivered real-vehicle testing with a 98% success rate on the Haidian test track under random disturbances."
      ]
    },
    {
      period: "2018 - 2022",
      organization: "Baidu NLP Department - Deep Learning",
      role: "Technical Lead (T8-T9)",
      highlights: [
        "Led the release of PLATO, one of the earliest commercial generative dialogue foundation models in China.",
        "Built the AI bio-computing direction, open-sourced PaddleHelix, and contributed work published in Nature family journals.",
        "Led reinforcement learning efforts, open-sourced PARL, and won NeurIPS competitions three times.",
        "Collaborated with Baidu Maps to improve ETA prediction with graph-based models."
      ]
    }
  ],
  publications: [
    {
      venue: "ICLR 2026",
      title: "Context and Diversity Matter: The Emergence of In-Context Learning in World Models",
      description: "Studies how context diversity and training structure enable world models to acquire self-adaptive in-context learning behavior.",
      url: "https://arxiv.org/abs/2509.22353",
      coverUrl: "assets/images/WorldModel_ICL.png",
      featuredUrl: "https://zhuanlan.zhihu.com/p/1999912113813082630"
    },
    {
      venue: "NeurIPS 2025",
      title: "Towards Large-Scale In-Context Reinforcement Learning by Meta-Training in Randomized Worlds",
      description: "Scales in-context reinforcement learning to millions of tasks and long contexts through large-scale meta-training.",
      url: "https://openreview.net/forum?id=b6ASJBXtgP",
      coverUrl: "assets/images/Scale_ICRL.jpg",
      featuredUrl: "https://mp.weixin.qq.com/s/PGgjX7bpP6gAWrzxqE49mg"
    },
    {
      venue: "Communications of the ACM 2025",
      title: "Empowering Virtual Agents With Intelligent Systems",
      description: "Presents distributed and self-adaptive intelligent systems for virtual agents and multi-agent physical AI.",
      url: "https://dl.acm.org/doi/pdf/10.1145/3735504",
      coverUrl: "assets/images/EnvironmentAIAgents.jpg"
    },
    {
      venue: "Communications of the ACM 2025",
      title: "Putting the Smarts into Robot Bodies",
      description: "Outlines a learning-to-learn framework for embodied intelligence and more adaptive robot control.",
      url: "https://dl.acm.org/doi/full/10.1145/3703761",
      coverUrl: "assets/images/EmbodiedFoundationModel.jpg"
    },
    {
      venue: "Nature Machine Intelligence 2023",
      title: "A Method for Multiple-Sequence-Alignment-Free Protein Structure Prediction Using a Protein Language Model",
      description: "Shows how large-scale protein representation learning can support efficient protein folding without MSA.",
      url: "https://www.nature.com/articles/s42256-023-00721-6",
      coverUrl: "assets/images/ProteinFolding.png"
    },
    {
      venue: "TMLR 2022",
      title: "Evolving Decomposed Plasticity Rules for Information-Bottlenecked Meta-Learning",
      description: "Explores compact plasticity rules for meta-learning with richer memory and better adaptation.",
      url: "https://openreview.net/forum?id=6qMKztPn0n",
      coverUrl: "assets/images/EvolvingPRNN.jpg"
    },
    {
      venue: "Nature Machine Intelligence 2022",
      title: "Geometry-Enhanced Molecular Representation Learning for Property Prediction",
      description: "Combines molecular geometry and large-scale pretraining to improve property prediction.",
      url: "https://www.nature.com/articles/s42256-021-00438-4",
      iconClass: "bi bi-brain"
    },
    {
      venue: "ACL 2020",
      title: "PLATO: Pre-trained Dialogue Generation Model with Discrete Latent Variable",
      description: "Introduces a large-scale generative dialogue model with latent-variable control for more diverse responses.",
      url: "https://aclanthology.org/2020.acl-main.9/",
      iconClass: "bi bi-chat-dots"
    },
    {
      venue: "IJCAI 2019",
      title: "Learning to Select Knowledge for Response Generation in Dialog Systems",
      description: "Early retrieval-augmented generation work on selecting useful knowledge for response generation.",
      url: "https://www.ijcai.org/proceedings/2019/0706.pdf",
      iconClass: "bi bi-diagram-3"
    },
    {
      venue: "CoRL 2018",
      title: "Intervention Aided Reinforcement Learning for Safe and Practical Policy Optimization in Navigation",
      description: "Uses human intervention to make reinforcement learning safer and more practical in real-world navigation.",
      url: "https://proceedings.mlr.press/v87/wang18a.html",
      iconClass: "bi bi-sign-turn-right"
    }
  ]
};

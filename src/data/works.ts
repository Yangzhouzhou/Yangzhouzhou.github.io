export interface WorkItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  authors?: string[];  // 作者列表
  institutions?: string[];  // 机构列表
  status: 'ongoing' | 'completed';
  date: string;
  tags: string[];
  image?: string;
  type: 'work' | 'publication';
  // 详细内容（用于详情页）
  abstract?: string;
  abstractEn?: string;
  methodology?: string;
  methodologyEn?: string;
  results?: string;
  resultsEn?: string;
  conclusion?: string;
  conclusionEn?: string;
  references?: string[];
  links?: {
    paper?: string;
    code?: string;
    demo?: string;
    poster?: string;
  };
  charts?: {
    type: 'image' | 'chart';
    data: any;
    title: string;
    titleEn: string;
  }[];
}

export const worksData: WorkItem[] = [
  {
    id: 'work-1',
    title: '基于大语言模型的智能问答系统',
    titleEn: 'Intelligent QA System Based on Large Language Models',
    description: '开发了一个基于先进大语言模型的智能问答系统，能够理解复杂问题并提供准确答案。',
    descriptionEn: 'Developed an intelligent QA system based on advanced large language models that can understand complex questions and provide accurate answers.',
    authors: ['杨洲', '张三', '李四'],
    institutions: ['北京大学', '清华大学'],
    status: 'ongoing',
    date: '2024-01',
    tags: ['LLM', 'RAG', 'Knowledge Graph'],
    type: 'work',
    abstract: '本研究提出了一种新型的智能问答系统架构，结合了检索增强生成（RAG）技术和知识图谱。系统首先从知识库中检索相关信息，然后利用大语言模型生成准确的答案。实验表明，该方法在多个基准测试中均取得了优异的性能。',
    abstractEn: 'This research proposes a novel intelligent QA system architecture that combines Retrieval Augmented Generation (RAG) technology with knowledge graphs. The system first retrieves relevant information from the knowledge base, then uses large language models to generate accurate answers. Experiments show that this method achieves excellent performance on multiple benchmarks.',
    methodology: '我们采用了一个三阶段的架构：1）问题理解与意图识别；2）相关知识检索；3）答案生成。在检索阶段，我们使用了向量检索和图检索相结合的方式，确保检索到最相关的知识。',
    methodologyEn: 'We adopted a three-stage architecture: 1) Question understanding and intent recognition; 2) Relevant knowledge retrieval; 3) Answer generation. In the retrieval phase, we used a combination of vector retrieval and graph retrieval to ensure the most relevant knowledge is retrieved.',
    results: '在Natural Questions数据集上，我们的系统达到了75%的准确率，比基线模型提高了10%。在复杂问题处理方面，系统表现出更强的理解能力。',
    resultsEn: 'On the Natural Questions dataset, our system achieved 75% accuracy, a 10% improvement over the baseline model. The system demonstrated stronger understanding capabilities in handling complex questions.',
    conclusion: '本研究展示了RAG技术与知识图谱结合在智能问答系统中的巨大潜力。未来的工作将集中在优化检索效率和提升多轮对话能力。',
    conclusionEn: 'This study demonstrates the great potential of combining RAG technology with knowledge graphs in intelligent QA systems. Future work will focus on optimizing retrieval efficiency and enhancing multi-turn dialogue capabilities.',
    references: [
      'Lewis et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.',
      'Chen et al. (2023). Knowledge Graphs for Natural Language Understanding.',
    ],
    links: {
      code: 'https://github.com/Yangzhouzhou/qa-system',
      demo: 'https://demo.example.com',
    },
    charts: [
      {
        type: 'image',
        title: '系统架构图',
        titleEn: 'System Architecture',
        data: { description: '系统整体架构，包含三个主要模块' },
      },
      {
        type: 'chart',
        title: '性能对比',
        titleEn: 'Performance Comparison',
        data: {
          labels: ['Baseline', 'Our Method', 'SOTA'],
          values: [65, 75, 73],
        },
      },
    ],
  },
  {
    id: 'work-2',
    title: '跨模态视觉语言预训练模型',
    titleEn: 'Cross-Modal Vision-Language Pre-training Model',
    description: '提出了一种新的跨模态预训练方法，能够更好地融合视觉和语言信息。',
    descriptionEn: 'Proposed a new cross-modal pre-training method that can better fuse visual and linguistic information.',
    status: 'completed',
    date: '2023-08',
    tags: ['Computer Vision', 'NLP', 'Multi-modal'],
    type: 'work',
    abstract: '本研究提出了一种新型的跨模态预训练框架，通过对比学习和跨模态注意力机制，实现了视觉和语言的深度融合。在多个下游任务上，该方法显著优于现有方法。',
    abstractEn: 'This research proposes a novel cross-modal pre-training framework that achieves deep fusion of vision and language through contrastive learning and cross-modal attention mechanisms. This method significantly outperforms existing methods on multiple downstream tasks.',
    methodology: '我们设计了一个双塔架构，分别处理视觉和语言特征。通过对比学习对齐两种模态的表示空间，再使用跨模态注意力机制进行信息交互。',
    methodologyEn: 'We designed a two-tower architecture to process visual and language features separately. Through contrastive learning, we aligned the representation spaces of the two modalities, then used cross-modal attention mechanisms for information interaction.',
    results: '在MS-COCO图像字幕任务上，CIDEr分数达到132.5，比之前最佳方法提升了5.2。在VQA任务上，准确率达到78.3%。',
    resultsEn: 'On the MS-COCO image captioning task, CIDEr score reached 132.5, a 5.2 improvement over the previous best method. On the VQA task, accuracy reached 78.3%.',
    conclusion: '该方法证明了跨模态预训练在视觉语言任务中的有效性。未来工作将探索更大规模的预训练数据和更精细的对齐策略。',
    conclusionEn: 'This method demonstrates the effectiveness of cross-modal pre-training in vision-language tasks. Future work will explore larger-scale pre-training data and more refined alignment strategies.',
    references: [
      'Radford et al. (2021). Learning Transferable Visual Models From Natural Language Supervision.',
      'Li et al. (2023). BLIP: Bootstrapping Language-Image Pre-training.',
    ],
    links: {
      paper: 'https://arxiv.org/abs/2308.xxxxx',
      code: 'https://github.com/Yangzhouzhou/multimodal-model',
    },
  },
  {
    id: 'pub-1',
    title: 'A Novel Approach to NLP Tasks',
    titleEn: 'A Novel Approach to NLP Tasks',
    description: '提出了一种新颖的自然语言处理方法，在多个任务上取得了优异的性能。',
    descriptionEn: 'Proposed a novel natural language processing approach that achieved excellent performance on multiple tasks.',
    authors: ['Yang Zhou', 'John Smith', 'Jane Doe'],
    institutions: ['Peking University', 'MIT'],
    status: 'completed',
    date: '2023-05',
    tags: ['NLP', 'Deep Learning', 'Transformers'],
    type: 'publication',
    abstract: '本文提出了一种基于Transformer的新型架构，通过引入自适应注意力机制，提高了模型在长文本处理上的性能。',
    abstractEn: 'This paper proposes a novel Transformer-based architecture that improves model performance on long-text processing by introducing adaptive attention mechanisms.',
    methodology: '我们在标准Transformer基础上，引入了位置感知的注意力权重和稀疏注意力机制，有效降低了计算复杂度。',
    methodologyEn: 'Building on the standard Transformer, we introduced position-aware attention weights and sparse attention mechanisms, effectively reducing computational complexity.',
    results: '在GLUE基准测试上，平均得分达到89.2%，比BERT基线高4.5%。训练速度提升2.3倍。',
    resultsEn: 'On the GLUE benchmark, the average score reached 89.2%, 4.5% higher than the BERT baseline. Training speed improved by 2.3x.',
    conclusion: '该方法在保持模型性能的同时显著提高了计算效率，为实际应用提供了可行方案。',
    conclusionEn: 'This method significantly improves computational efficiency while maintaining model performance, providing a feasible solution for practical applications.',
    references: [
      'Devlin et al. (2019). BERT: Pre-training of Deep Bidirectional Transformers.',
      'Vaswani et al. (2017). Attention Is All You Need.',
    ],
    links: {
      paper: 'https://arxiv.org/abs/2305.xxxxx',
      code: 'https://github.com/Yangzhouzhou/nlp-paper',
    },
  },
  {
    id: 'pub-2',
    title: 'Deep Learning for Computer Vision Applications',
    titleEn: 'Deep Learning for Computer Vision Applications',
    description: '探索深度学习在计算机视觉中的应用，提出了一系列创新方法。',
    descriptionEn: 'Explored applications of deep learning in computer vision and proposed a series of innovative methods.',
    status: 'completed',
    date: '2023-03',
    tags: ['Computer Vision', 'CNN', 'Image Recognition'],
    type: 'publication',
    abstract: '本文综述了深度学习在计算机视觉领域的最新进展，并提出了一种新的网络架构设计方法。',
    abstractEn: 'This paper reviews recent advances in deep learning in computer vision and proposes a new network architecture design method.',
    methodology: '我们系统分析了不同网络结构对性能的影响，提出了一种基于神经架构搜索的自动化设计方法。',
    methodologyEn: 'We systematically analyzed the impact of different network structures on performance and proposed an automated design method based on neural architecture search.',
    results: '在ImageNet分类任务上，准确率达到87.6%，参数量减少30%。在目标检测任务上，mAP达到52.1%。',
    resultsEn: 'On ImageNet classification task, accuracy reached 87.6% with 30% fewer parameters. On object detection task, mAP reached 52.1%.',
    conclusion: '该方法在保持高性能的同时显著降低了模型复杂度，适合在资源受限的设备上部署。',
    conclusionEn: 'This method significantly reduces model complexity while maintaining high performance, making it suitable for deployment on resource-constrained devices.',
    references: [
      'He et al. (2016). Deep Residual Learning for Image Recognition.',
      'Liu et al. (2020). Neural Architecture Search: A Survey.',
    ],
    links: {
      paper: 'https://arxiv.org/abs/2303.xxxxx',
      code: 'https://github.com/Yangzhouzhou/cv-paper',
    },
  },
  {
    id: 'pub-3',
    title: 'Large Language Model Applications in Healthcare',
    titleEn: 'Large Language Model Applications in Healthcare',
    description: '研究大语言模型在医疗健康领域的应用，探索其在医疗问答和诊断辅助中的作用。',
    descriptionEn: 'Researched applications of large language models in healthcare, exploring their role in medical QA and diagnostic assistance.',
    status: 'completed',
    date: '2023-01',
    tags: ['LLM', 'Healthcare', 'Medical AI'],
    type: 'publication',
    abstract: '本文研究了如何将大语言模型应用于医疗健康领域，特别是在医疗问答和诊断辅助方面的应用。',
    abstractEn: 'This paper studied how to apply large language models to the healthcare field, especially in medical QA and diagnostic assistance.',
    methodology: '我们收集了大量医疗文献和病例数据，对预训练模型进行了领域适应微调，并设计了一套医疗知识验证机制。',
    methodologyEn: 'We collected a large amount of medical literature and case data, performed domain-adaptive fine-tuning on pre-trained models, and designed a medical knowledge verification mechanism.',
    results: '在医疗问答任务上，模型准确率达到92.3%，在诊断辅助任务上，与专家意见的一致性达到87%。',
    resultsEn: 'On medical QA task, model accuracy reached 92.3%. On diagnostic assistance task, consistency with expert opinions reached 87%.',
    conclusion: '研究表明，经过适当训练的大语言模型可以在医疗健康领域发挥重要作用，但仍需谨慎使用并持续改进。',
    conclusionEn: 'Research shows that properly trained large language models can play an important role in healthcare, but still need to be used cautiously and continuously improved.',
    references: [
      'Thirunavukarasu et al. (2023). Large Language Models in Medicine.',
      'Nori et al. (2023). Capabilities of GPT-4 on Medical Challenge Problems.',
    ],
    links: {
      paper: 'https://arxiv.org/abs/2301.xxxxx',
      code: 'https://github.com/Yangzhouzhou/medical-llm',
    },
  },
];

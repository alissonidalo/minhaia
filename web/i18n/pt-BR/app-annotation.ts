const translation = {
  title: 'Anotações',
  name: 'Resposta de Anotação',
  editBy: 'Resposta editada por {{author}}',
  noData: {
    title: 'Sem anotações',
    description: 'Você pode editar anotações no depuração do aplicativo ou importar anotações em massa aqui para obter uma resposta de alta qualidade.',
  },
  table: {
    header: {
      question: 'pergunta',
      answer: 'resposta',
      createdAt: 'criado em',
      hits: 'acessos',
      actions: 'ações',
      addAnnotation: 'Adicionar Anotação',
      bulkImport: 'Importação em Massa',
      bulkExport: 'Exportação em Massa',
      clearAll: 'Limpar Todas as Anotações',
    },
  },
  editModal: {
    title: 'Editar Resposta de Anotação',
    queryName: 'Consulta do Usuário',
    answerName: 'Bot Contador de Histórias',
    yourAnswer: 'Sua Resposta',
    answerPlaceholder: 'Digite sua resposta aqui',
    yourQuery: 'Sua Consulta',
    queryPlaceholder: 'Digite sua consulta aqui',
    removeThisCache: 'Remover esta Anotação',
    createdAt: 'Criado em',
  },
  addModal: {
    title: 'Adicionar Resposta de Anotação',
    queryName: 'Pergunta',
    answerName: 'Resposta',
    answerPlaceholder: 'Digite a resposta aqui',
    queryPlaceholder: 'Digite a pergunta aqui',
    createNext: 'Adicionar outra resposta anotada',
  },
  batchModal: {
    title: 'Importação em Massa',
    csvUploadTitle: 'Arraste e solte seu arquivo CSV aqui, ou ',
    browse: 'navegue',
    tip: 'O arquivo CSV deve seguir a seguinte estrutura:',
    question: 'pergunta',
    answer: 'resposta',
    contentTitle: 'conteúdo do fragmento',
    content: 'conteúdo',
    template: 'Baixe o modelo aqui',
    cancel: 'Cancelar',
    run: 'Executar em Lote',
    runError: 'Falha na execução em lote',
    processing: 'Processando em lote',
    completed: 'Importação concluída',
    error: 'Erro na importação',
    ok: 'OK',
  },
  errorMessage: {
    answerRequired: 'A resposta é obrigatória',
    queryRequired: 'A pergunta é obrigatória',
  },
  viewModal: {
    annotatedResponse: 'Resposta de Anotação',
    hitHistory: 'Histórico de Acessos',
    hit: 'Acesso',
    hits: 'Acessos',
    noHitHistory: 'Nenhum histórico de acesso',
  },
  hitHistoryTable: {
    query: 'Consulta',
    match: 'Correspondência',
    response: 'Resposta',
    source: 'Origem',
    score: 'Pontuação',
    time: 'Tempo',
  },
  initSetup: {
    title: 'Configuração Inicial da Resposta de Anotação',
    configTitle: 'Configuração da Resposta de Anotação',
    confirmBtn: 'Salvar e Habilitar',
    configConfirmBtn: 'Salvar',
  },
  embeddingModelSwitchTip: 'Modelo de vetorização de texto de anotação, a troca de modelos será refeita, resultando em custos adicionais.',
}

export default translation

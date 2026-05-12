/* Infinite Labs · Portfolio · 35 cases data */
window.PORTFOLIO_CASES = [
  // Familia 1 · Conversacional
  { id:"chatbot-ciudadano",       fam:"conversacional", famNum:"01", sectors:["publico"],           techs:["chat","rag"],            href:"/portfolio/conversacional/#chatbot-ciudadano" },
  { id:"chatbot-academico",       fam:"conversacional", famNum:"01", sectors:["edu","publico"],     techs:["chat","rag"],            href:"/portfolio/conversacional/#chatbot-academico" },
  { id:"chatbot-turistico",       fam:"conversacional", famNum:"01", sectors:["turismo","publico"], techs:["chat","rag"],            href:"/portfolio/conversacional/#chatbot-turistico" },
  { id:"chatbot-crm",             fam:"conversacional", famNum:"01", sectors:["b2b"],               techs:["chat","agentes"],        href:"/portfolio/conversacional/#chatbot-crm" },
  { id:"recepcionista-salud",     fam:"conversacional", famNum:"01", sectors:["salud"],             techs:["chat","agentes"],        href:"/portfolio/conversacional/#recepcionista-salud" },
  { id:"chatbot-legal",           fam:"conversacional", famNum:"01", sectors:["legal","b2b"],       techs:["chat","rag","compliance"],href:"/portfolio/conversacional/#chatbot-legal" },

  // Familia 2 · Agentes
  { id:"agentes-backoffice",      fam:"agentes",        famNum:"02", sectors:["publico","b2b"],     techs:["agentes","compliance"],  href:"/portfolio/agentes/#agentes-backoffice" },
  { id:"agente-bi-conversacional",fam:"agentes",        famNum:"02", sectors:["b2b","publico"],     techs:["agentes","datos"],       href:"/portfolio/agentes/#agente-bi" },
  { id:"agente-normativa",        fam:"agentes",        famNum:"02", sectors:["legal","publico"],   techs:["agentes","rag","compliance"],href:"/portfolio/agentes/#agente-normativa" },
  { id:"agentes-qa",              fam:"agentes",        famNum:"02", sectors:["b2b"],               techs:["agentes"],               href:"/portfolio/agentes/#agentes-qa" },
  { id:"agente-observability",    fam:"agentes",        famNum:"02", sectors:["b2b"],               techs:["agentes","datos"],       href:"/portfolio/agentes/#agente-observability" },
  { id:"agente-outreach",         fam:"agentes",        famNum:"02", sectors:["b2b"],               techs:["agentes","chat"],        href:"/portfolio/agentes/#agente-outreach" },
  { id:"agente-evaluaciones",     fam:"agentes",        famNum:"02", sectors:["edu","b2b"],         techs:["agentes","modelos"],     href:"/portfolio/agentes/#agente-evaluaciones" },

  // Familia 3 · RAG
  { id:"rag-corporativo",         fam:"rag",            famNum:"03", sectors:["b2b","publico"],     techs:["rag"],                   href:"/portfolio/rag/#rag-corporativo" },
  { id:"rag-compliance",          fam:"rag",            famNum:"03", sectors:["b2b","legal"],       techs:["rag","compliance"],      href:"/portfolio/rag/#rag-compliance" },
  { id:"rag-transcripciones",     fam:"rag",            famNum:"03", sectors:["publico","edu"],     techs:["rag","modelos"],         href:"/portfolio/rag/#rag-transcripciones" },
  { id:"rag-busqueda-juridica",   fam:"rag",            famNum:"03", sectors:["legal","publico"],   techs:["rag","compliance"],      href:"/portfolio/rag/#rag-busqueda-juridica" },

  // Familia 4 · Workflow
  { id:"cdc-hibrido",             fam:"workflow",       famNum:"04", sectors:["b2b","publico"],     techs:["datos"],                 href:"/portfolio/workflow/#cdc-hibrido" },
  { id:"itsm-publico",            fam:"workflow",       famNum:"04", sectors:["publico","b2b"],     techs:["agentes"],               href:"/portfolio/workflow/#itsm" },
  { id:"comunicacion-ciudadana",  fam:"workflow",       famNum:"04", sectors:["publico"],           techs:["chat","agentes"],        href:"/portfolio/workflow/#comunicacion-ciudadana" },
  { id:"informes-automaticos",    fam:"workflow",       famNum:"04", sectors:["publico","b2b"],     techs:["agentes","datos"],       href:"/portfolio/workflow/#informes" },
  { id:"memorias-licitaciones",   fam:"workflow",       famNum:"04", sectors:["b2b","publico"],     techs:["agentes","rag"],         href:"/portfolio/workflow/#memorias" },

  // Familia 5 · Governance
  { id:"governance-ai-act",       fam:"governance",     famNum:"05", sectors:["b2b","publico"],     techs:["compliance"],            href:"/portfolio/governance/#ai-act" },
  { id:"auditoria-altai",         fam:"governance",     famNum:"05", sectors:["publico","b2b"],     techs:["compliance"],            href:"/portfolio/governance/#altai" },
  { id:"multi-marco-compliance",  fam:"governance",     famNum:"05", sectors:["b2b","publico"],     techs:["compliance","rag"],      href:"/portfolio/governance/#multi-marco" },

  // Familia 6 · Verticales y sintéticos
  { id:"plataforma-seguros",      fam:"verticales",     famNum:"06", sectors:["legal","b2b"],       techs:["modelos","agentes","compliance"],href:"/portfolio/verticales/#seguros" },
  { id:"asistente-legal",         fam:"verticales",     famNum:"06", sectors:["legal","b2b"],       techs:["rag","chat","compliance"],href:"/portfolio/verticales/#legal" },
  { id:"aceleradora-empresarial", fam:"verticales",     famNum:"06", sectors:["b2b","publico"],     techs:["agentes","datos"],       href:"/portfolio/verticales/#aceleradora" },
  { id:"gemelo-digital",          fam:"verticales",     famNum:"06", sectors:["publico","turismo"], techs:["datos","modelos"],       href:"/portfolio/verticales/#gemelo-digital" },
  { id:"datos-sinteticos-salud",  fam:"verticales",     famNum:"06", sectors:["salud","b2b"],       techs:["modelos","datos","compliance"],href:"/portfolio/verticales/#datos-sinteticos" },
  { id:"data-spaces",             fam:"verticales",     famNum:"06", sectors:["b2b","publico"],     techs:["datos","compliance"],    href:"/portfolio/verticales/#data-spaces" },

  // Familia 7 · Modelos
  { id:"finetuning-vertical",     fam:"modelos",        famNum:"07", sectors:["b2b","legal","salud"],techs:["modelos"],              href:"/portfolio/modelos/#finetuning" },
  { id:"forecasting-anomaly",     fam:"modelos",        famNum:"07", sectors:["b2b","publico","turismo"],techs:["modelos","datos"],  href:"/portfolio/modelos/#forecasting" },
  { id:"clasificacion-salud",     fam:"modelos",        famNum:"07", sectors:["salud","legal"],     techs:["modelos","compliance"],  href:"/portfolio/modelos/#clasificacion-salud" },
  { id:"ocr-custom",              fam:"modelos",        famNum:"07", sectors:["legal","b2b","publico"],techs:["modelos","datos"],    href:"/portfolio/modelos/#ocr" },
  { id:"eval-benchmarking",       fam:"modelos",        famNum:"07", sectors:["b2b"],               techs:["modelos","compliance"],  href:"/portfolio/modelos/#eval" }
];

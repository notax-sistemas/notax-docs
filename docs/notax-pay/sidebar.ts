import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "notax-pay/notaxpay-api-v-1",
    },
    {
      type: "category",
      label: "Cliente",
      link: {
        type: "doc",
        id: "notax-pay/cliente",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-cliente",
          label: "Cadastrar cliente",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/autenticar-cliente",
          label: "Autenticar cliente",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Titular de Conta",
      link: {
        type: "doc",
        id: "notax-pay/titular-de-conta",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-titular-de-conta",
          label: "Cadastrar titular de conta",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-titulares-de-conta",
          label: "Listar titulares de conta",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/buscar-titular-de-conta",
          label: "Buscar titular de conta",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Conta Bancária",
      link: {
        type: "doc",
        id: "notax-pay/conta-bancaria",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-conta-bancaria",
          label: "Cadastrar conta bancária",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-contas-bancarias",
          label: "Listar contas bancárias",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/buscar-conta-bancaria",
          label: "Buscar conta bancária",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Convênio",
      link: {
        type: "doc",
        id: "notax-pay/convenio",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-convenio",
          label: "Cadastrar convênio",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-convenios",
          label: "Listar convênios",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/buscar-convenio",
          label: "Buscar convênio",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Boleto",
      link: {
        type: "doc",
        id: "notax-pay/boleto",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-lote-de-boletos",
          label: "Cadastrar lote de boletos",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-boletos",
          label: "Listar boletos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/buscar-boleto",
          label: "Buscar boleto",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhook",
      link: {
        type: "doc",
        id: "notax-pay/webhook",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "notax-pay/cadastrar-webhook",
          label: "Cadastrar webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-webhooks",
          label: "Listar webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/buscar-webhook",
          label: "Buscar webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/atualizar-webhook",
          label: "Atualizar webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "notax-pay/remover-webhook",
          label: "Remover webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "notax-pay/ativar-webhook",
          label: "Ativar webhook",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "notax-pay/desativar-webhook",
          label: "Desativar webhook",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "notax-pay/listar-eventos-disparados-de-um-webhook",
          label: "Listar eventos disparados de um webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/detalhar-evento-de-webhook",
          label: "Detalhar evento de webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notax-pay/reenviar-evento-de-webhook",
          label: "Reenviar evento de webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/disparar-teste-sintetico",
          label: "Disparar teste sintético",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notax-pay/listar-tipos-de-eventos-suportados",
          label: "Listar tipos de eventos suportados",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "notax-pay/notaxpay-api-v-1",
    },
    {
      type: "category",
      label: "Covenant",
      link: {
        type: "doc",
        id: "notax-pay/covenant",
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
      label: "Client",
      link: {
        type: "doc",
        id: "notax-pay/client",
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
      label: "BankSlip",
      link: {
        type: "doc",
        id: "notax-pay/bank-slip",
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
      label: "BankAccount",
      link: {
        type: "doc",
        id: "notax-pay/bank-account",
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
      label: "AccountHolder",
      link: {
        type: "doc",
        id: "notax-pay/account-holder",
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
  ],
};

export default sidebar.apisidebar;

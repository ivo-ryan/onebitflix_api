import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import AdminJSSquelize from '@adminjs/sequelize';
import { sequelize } from "../database/seeders";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSquelize);

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin', 
    resources: adminJsResources, 
    branding: brandingOptions,
    locale: locale,
    dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, authenticationOptions, null, {
    resave: false,
    saveUnitialized: false
})
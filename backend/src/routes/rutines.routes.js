const { Router } = require('express')
const { getRutines, getRutinesById, putRutines, postRutines, deleteRutines } = require('../controllers/rutines.controllers')
const authenticate = require('../middlewares/auth.middleware')

const rutineRouter = Router()
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     A_rutines:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         dataRutine:
 *           type: string
 *           example: Piernas  
 *         description:
 *           type: string
 *           example: se debe cargar las pesas y bajar y subir 10 veces
 *         userId: 
 *           type: int
 *           example: 1
 *     Rutine:
 *       type: object
 *       properties:
 *         dataRutine:
 *           type: string
 *           example: Tony
 *         description:
 *           type: string
 *           example: Ospino
 * 
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     addRutines:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Tony
 *         dataRutine:
 *           type: string
 *           example: Piernas  
 *         description:
 *           type: string
 *           example: se debe cargar las pesas y bajar y subir 10 veces
 *         userId: 
 *           type: int
 *           example: 1
 *     showRutine:
 *       type: object
 *       properties:
 *         dataRutine:
 *           type: string
 *           example: Tony
 *         description:
 *           type: string
 *           example: Ospino
 * 
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     changeRutine:
 *       type: object
 *       properties:
 *         rol:
 *           type: string
 *           example: client         
 */


/**
* @openapi
* /api/v1/rutines:
*   get:
*     summary: Get all rutines
*     tags: [Rutines]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items: {}
*   
*/

/**
 * @openapi
 * /api/v1/rutines/{id}:
 *   get:
 *     summary: Get rutine by id
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */

/**
 * @openapi
 * /api/v1/rutines:
 *   post:
 *     summary: post a rutine into the app
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new user you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addRutines"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/showRutine"
 *     
 *
 */

/**
* @openapi
* /api/v1/rutines/{id}:
*   put:
*     summary: update rutine by id
*     tags: [Rutines]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*           minimum: 1
*         description: user id
*     requestBody:
*       description: To update a user you need a some parameters, for example
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/A_rutines"
*     responses:
*       201:
*         description: OK
*
*/



/**
 * @openapi
 * /api/v1/rutines/{id}:
 *   delete:
 *     summary: Delete rutine by id
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: publication id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */


rutineRouter.get('/rutines', authenticate, getRutines)
rutineRouter.get('/rutines/:id', authenticate, getRutinesById)
rutineRouter.put('/rutines/:id', authenticate, putRutines)
rutineRouter.post('/rutines', authenticate, postRutines)
rutineRouter.delete('/rutines/:id', authenticate, deleteRutines)


module.exports = rutineRouter
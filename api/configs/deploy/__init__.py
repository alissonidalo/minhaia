from pydantic import Field
from pydantic_settings import BaseSettings


class DeploymentConfig(BaseSettings):
    """
    Deployment configs
    """
    APPLICATION_NAME: str = Field(
        description='All-in-one AI platform',
        default='Minha IA',
    )

    TESTING: bool = Field(
        description='',
        default=False,
    )

    EDITION: str = Field(
        description='deployment edition',
        default='SELF_HOSTED',
    )

    DEPLOY_ENV: str = Field(
        description='deployment environment, default to PRODUCTION.',
        default='PRODUCTION',
    )
